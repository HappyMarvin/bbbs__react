import React from "react";
import PropTypes from "prop-types";
import "./Calendar.css";

import Title from "../Title/Title";
import SelectList from "../SelectList/SelectList";
import CalendarList from "../CalendarList/CalendarList";

function Calendar({ mix }) {
  return (
    <div className={`calendar ${mix}`}>
      <Title text={"Календарь"} />
      <SelectList list={["Декабрь", "Январь", "Февраль"]} />
      <CalendarList events={[]} />
    </div>
  );
}

Calendar.propTypes = {
  mix: PropTypes.string,
};

export default Calendar;
