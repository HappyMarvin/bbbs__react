import React from "react";
import PropTypes from "prop-types";
import "./Calendar.css";

import CalendarMonths from "../CalendarMonths/CalendarMonths";
import CalendarList from "../CalendarList/CalendarList";
import Loader from "../Loader/Loader";

import testCalendarEvents from "./ForTest";
import { TIME_DELAY } from "../../utils/constants";

function Calendar({ mix }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
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
    const index = selectedMonths.indexOf(number);
    if (index === -1) {
      setSelectedMonths(selectedMonths.concat(number));
    } else {
      const arr = selectedMonths.slice(0);
      arr.splice(index, 1);
      setSelectedMonths(arr);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getCalendarEvents();
      setIsLoading(false);
    }, TIME_DELAY);
  }, []);

  return (
    <main className={`calendar ${mix}`}>
      {isLoading && <Loader isAbsolute={true} />}
      <h1 className="calendar__title">Календарь</h1>
      <CalendarMonths
        months={months}
        selectedMonths={selectedMonths}
        onClickMonth={handleMonthClick}
      />
      {/* <SelectList list={["Декабрь", "Январь", "Февраль"]} /> */}
      <CalendarList events={[]} />
    </main>
  );
}

Calendar.propTypes = {
  mix: PropTypes.string,
};

export default Calendar;
