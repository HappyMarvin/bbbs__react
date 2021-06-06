import React from "react";
import PropTypes from "prop-types";
import "./CalendarEvent.css";

import { MONTHS, WEEK_DAYS } from "../../utils/constants";

// !!! IMPOTANT !!!
// EN: use only calendar
// RU: используется только в каледаре, чтобы переимспользовать компонент на главной сранице необходимо его доработать
// все запросы на сервер описываются в Calendar
// Необходим попап PopupCalendarEvent

const CalendarEvent = ({
  mix,
  calEvent,
  isPopup = false,
  onLook,
  onConfirmingUpdate,
}) => {
  return (
    <article
      className={`calendar-event ${
        calEvent.booked && !isPopup && "calendar-event_booked"
      } ${mix}`}
    >
      <div className="calendar-event__heading">
        <h2 className="calendar-event__title">{calEvent.title}</h2>
        {calEvent.tags && (
          <p className="calendar-event__tags">
            {calEvent.tags.map((tag) => tag.name).join(" + ")}
          </p>
        )}
        <p className="calendar-event__date">
          {`${MONTHS[new Date(calEvent.startAt).getMonth()]} / ${
            WEEK_DAYS[new Date(calEvent.startAt).getDay()]
          }`}
        </p>
        <p className="calendar-event__day">
          {new Date(calEvent.startAt).getDate()}
        </p>
      </div>
      <div className="calendar-event__meeting">
        <p className="calendar-event__meeting-info">{`${new Date(
          calEvent.startAt
        ).getHours()}:${`00${new Date(calEvent.startAt).getMinutes()}`.slice(
          -2
        )}–${new Date(calEvent.endAt).getHours()}:${`00${new Date(
          calEvent.endAt
        ).getMinutes()}`.slice(-2)}`}</p>
        <p className="calendar-event__meeting-info">{calEvent.address}</p>
        <p className="calendar-event__meeting-info">{calEvent.contact}</p>
      </div>
      {isPopup && (
        <p className="calendar-event__description">{calEvent.description}</p>
      )}
      <div className="calendar-event__actions">
        <button
          type="button"
          className={`calendar-event__action ${
            calEvent.booked && "calendar-event__action_active"
          }`}
          onClick={() => onConfirmingUpdate(calEvent)}
          disabled={!calEvent.booked && !calEvent.remainSeats}
        >
          {calEvent.booked ? "Отменить запись" : "Записаться"}
        </button>

        {!calEvent.booked && (
          <p className="calendar-event__remain-seats">
            {calEvent.remainSeats
              ? `Осталось ${calEvent.remainSeats} мест`
              : "Запись закрыта"}
          </p>
        )}
        {!isPopup && (
          <button
            type="button"
            className="calendar-event__action calendar-event__action_open-popup"
            onClick={() => onLook(calEvent)}
          />
        )}
      </div>
    </article>
  );
};

CalendarEvent.propTypes = {
  mix: PropTypes.string,
  calEvent: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object),
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    address: PropTypes.string,
    contact: PropTypes.string,
    remainSeats: PropTypes.number,
    booked: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
  isPopup: PropTypes.bool,
  onLook: PropTypes.func,
  onConfirmingUpdate: PropTypes.func,
};

export default CalendarEvent;
