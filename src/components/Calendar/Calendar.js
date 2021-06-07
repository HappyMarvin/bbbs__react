import React from "react";
import PropTypes from "prop-types";
import "./Calendar.css";

import Loader from "../Loader/Loader";
import CalendarMonths from "../CalendarMonths/CalendarMonths";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import Popup from "../Popup/Popup";
import PopupCalendarEvent from "../PopupCalendarEvent/PopupCalendarEvent";

import testCalendarEvents from "./ForTest";
import { TIME_DELAY } from "../../utils/constants";

function Calendar({ mix }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [visibleEvents, setVisibleEvents] = React.useState([]);
  const [months, setMonths] = React.useState([]);
  const [selectedMonths, setSelectedMonths] = React.useState([]);
  const [selectedEvent, setSelectedEvent] = React.useState({});
  const [isCalendarEventPopupOpen, setIsCalendarEventPopupOpen] =
    React.useState(false);
  const [popupCalendarEventStep, setPopupCalendarEventStep] =
    React.useState("");

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

  const handleUpdateEvent = (item, endLoading) => {
    setTimeout(() => {
      if (item.booked) {
        // RU: запись с ошибкой (TO DO: необходимо переделать при взаимодествии с API)
        setEvents((state) =>
          state.map((c) =>
            c.id !== item.id
              ? c
              : { ...c, booked: false, remainSeats: item.remainSeats + 1 }
          )
        );
        setPopupCalendarEventStep("error");
      } else {
        // RU: отмена записи без ошибки (TO DO: необходимо переделать при взаимодествии с API)
        setEvents((state) =>
          state.map((c) =>
            c.id !== item.id
              ? c
              : { ...c, booked: true, remainSeats: item.remainSeats - 1 }
          )
        );
        setPopupCalendarEventStep("success");
      }
      endLoading();
    }, TIME_DELAY);
  };

  const handleEventUpdateonConfirming = (item) => {
    setSelectedEvent(item);
    setPopupCalendarEventStep("update");
    setIsCalendarEventPopupOpen(true);
  };

  const openCalendarEventPopup = (item) => {
    setPopupCalendarEventStep("look");
    setSelectedEvent(item);
    setIsCalendarEventPopupOpen(true);
  };

  const closeCalendarEventPopup = () => {
    setIsCalendarEventPopupOpen(false);
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
  }, [months, selectedMonths, events]);

  return (
    <>
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
                <CalendarEvent
                  calEvent={item}
                  openPopup={openCalendarEventPopup}
                  onLook={openCalendarEventPopup}
                  onConfirmingUpdate={handleEventUpdateonConfirming}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Popup
        component={PopupCalendarEvent}
        calEvent={selectedEvent}
        isOpen={isCalendarEventPopupOpen}
        onClose={closeCalendarEventPopup}
        step={popupCalendarEventStep}
        onConfirmingUpdate={handleEventUpdateonConfirming}
        onUpdate={handleUpdateEvent}
      />
    </>
  );
}

Calendar.propTypes = {
  mix: PropTypes.string,
};

export default Calendar;
