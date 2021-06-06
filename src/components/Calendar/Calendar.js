import React from "react";
import PropTypes from "prop-types";
import "./Calendar.css";

import Loader from "../Loader/Loader";
import CalendarMonths from "../CalendarMonths/CalendarMonths";
import CalendarEvent from "../CalendarEvent/CalendarEvent";

import testCalendarEvents from "./ForTest";
import { TIME_DELAY } from "../../utils/constants";

function Calendar({ mix }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [visibleEvents, setVisibleEvents] = React.useState([]);
  const [months, setMonths] = React.useState([]);
  const [selectedMonths, setSelectedMonths] = React.useState([]);

  const getCalendarEvents = () => {
    setEvents(testCalendarEvents);
    const arr = testCalendarEvents.map((event) =>
      new Date(event.startAt).getMonth()
    );
    setMonths(arr.filter((item, index) => arr.indexOf(item) === index));
  };

  const handleMonthClick = (number) => {
    selectedMonths.includes(number)
      ? setSelectedMonths([])
      : setSelectedMonths([number]);
    /* RU: если можно выбрать несколько месяцев
    const index = selectedMonths.indexOf(number);
    if (index === -1) {
      setSelectedMonths(selectedMonths.concat(number));
    } else {
      const arr = selectedMonths.slice(0);
      arr.splice(index, 1);
      setSelectedMonths(arr);
    } */
  };

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getCalendarEvents();
      setIsLoading(false);
    }, TIME_DELAY);
  }, []);

  React.useEffect(() => {
    if (selectedMonths.length > 0) {
      setVisibleEvents(
        events.filter((event) =>
          selectedMonths.includes(new Date(event.startAt).getMonth())
        )
      );
    } else {
      setVisibleEvents(events);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [months, selectedMonths]);

  return (
    <main className={`calendar ${mix}`}>
      {isLoading && <Loader />}
      <h1 className="calendar__title">Календарь</h1>
      <CalendarMonths
        months={months}
        selectedMonths={selectedMonths}
        onClickMonth={handleMonthClick}
      />
      <section aria-label="События календаря" className="calendar__events">
        <ul className="calendar__events-list">
          {visibleEvents.map((item) => (
            <li key={item.id} className="calendar__events-item">
              <CalendarEvent calEvent={item} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

Calendar.propTypes = {
  mix: PropTypes.string,
};

export default Calendar;
