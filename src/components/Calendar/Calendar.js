import "./Calendar.css";
import Title from "../Title/Title";
import SelectList from "../SelectList/SelectList";
import CalendarList from "../CalendarList/CalendarList";

function Calendar({ mix }) {
  return (
    <div className={`calendar ${mix}`}>
      <Title text={"Календарь"} />
      <SelectList />
      <CalendarList />
    </div>
  );
}

export default Calendar;
