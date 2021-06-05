import React from "react";
import PropTypes from "prop-types";
import "./Calendar.css";

import SelectList from "../SelectList/SelectList";
import CalendarList from "../CalendarList/CalendarList";
import Loader from "../Loader/Loader";

import testCalendarEvents from "./ForTest";
import { TIME_DELAY } from "../../utils/constants";

function Calendar({ mix }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [months, setMonths] = React.useState([]);

  const getCalendarEvents = () => {
    setEvents(testCalendarEvents);
    setMonths(
      testCalendarEvents.map((event) => new Date(event.startAt).getMonth())
    );
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
      {/* <button type="button" onClick={() => console.log(events, months)} /> */}
      <h1 className="calendar__title">Календарь</h1>
      <SelectList list={["Декабрь", "Январь", "Февраль"]} />
      <CalendarList events={[]} />
    </main>
  );
}

Calendar.propTypes = {
  mix: PropTypes.string,
};

export default Calendar;
