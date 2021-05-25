import "./CalendarList.css";
import CalendarEvent from "../CalendarEvent/CalendarEvent";

function CalendarList({ events }) {
  return (
    <section className="calendar-list">
      <CalendarEvent />
    </section>
  );
}
export default CalendarList;
