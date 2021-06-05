import React from "react";
import PropTypes from "prop-types";
import "./CalendarList.css";
import CalendarEvent from "../CalendarEvent/CalendarEvent";

function CalendarList({ events }) {
  return (
    <section className="calendar-list">
      <CalendarEvent event={{}} />
    </section>
  );
}

CalendarList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CalendarList;
