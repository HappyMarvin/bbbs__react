import React from "react";
import PropTypes from "prop-types";
import "./PopupCalendarEvent.css";

import Loader from "../Loader/Loader";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import { MONTHS } from "../../utils/constants";

const PopupCalendarEvent = ({ calEvent, onClose, step, onUpdate }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  /* const handleBookedEventClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, TIME_DELAY);
  }; */

  const handleEventUpdate = () => {
    // TO DO
  };

  return (
    <div className="popup-calendar-event">
      {isLoading && <Loader isAbsolute={true} />}
      {step === "look" && (
        <CalendarEvent
          mix="popup-calendar-event__event"
          calEvent={calEvent}
          isPopup={true}
          onUpdate={onUpdate}
        />
      )}
      {step === "update" && (
        <div className="popup-calendar-event__booking">
          <div className="popup-calendar-event__booking-text">
            <p className="popup-calendar-event__booking-paragraph">
              {`Подтвердить ${
                calEvent.booked ? "отмену записи" : "запись"
              } на мероприятие`}
            </p>
            <p className="popup-calendar-event__booking-paragraph">
              {`«${calEvent.title}»`}
            </p>
            <p className="popup-calendar-event__booking-paragraph">
              {`${new Date(calEvent.startAt).getDate()} ${
                MONTHS[new Date(calEvent.startAt).getMonth()]
              } ${new Date(calEvent.startAt).getHours()}:${`00${new Date(
                calEvent.startAt
              ).getMinutes()}`.slice(-2)}–${new Date(
                calEvent.endAt
              ).getHours()}:${`00${new Date(
                calEvent.endAt
              ).getMinutes()}`.slice(-2)}`}
            </p>
          </div>
          <div className="popup-calendar-event__booking-actions">
            <button
              type="button"
              className={`popup-calendar-event__button ${
                calEvent.booked && "popup-calendar-event__button_active"
              }`}
              onClick={handleEventUpdate}
            >
              {`Подтвердить ${calEvent.booked ? "отмену" : "запись"} `}
            </button>
            <button
              type="button"
              className="popup-calendar-event__button popup-calendar-event__button_cancel"
              onClick={onClose}
            >
              Отменить
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="popup-calendar-event__button-close"
        onClick={onClose}
      />
    </div>
  );
};

PopupCalendarEvent.propTypes = {
  calEvent: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  step: PropTypes.oneOf(["look", "update", ""]),
  onUpdate: PropTypes.func,
};

export default PopupCalendarEvent;
