import React from "react";
import PropTypes from "prop-types";
import "./CalendarEvent.css";

import { TIME_DELAY, MONTHS, WEEK_DAYS } from "../../utils/constants";

import Loader from "../Loader/Loader";

function CalendarEvent({ calEvent }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleBookedEventClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, TIME_DELAY);
  };

  return (
    <article
      className={`calendar-event ${calEvent.booked && "calendar-event_booked"}`}
    >
      {isLoading && <Loader isAbsolute={true} />}
      <div className="calendar-event__heading">
        <h2 className="calendar-event__title">{calEvent.title}</h2>
        <p className="calendar-event__tags">
          {calEvent.tags.map((tag) => tag.name).join(" + ")}
        </p>
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
      <div className="calendar-event__actions">
        {calEvent.booked ? (
          <button
            type="button"
            className="calendar-event__action calendar-event__action_active"
          >
            Отменить запись
          </button>
        ) : (
          <>
            <button
              type="button"
              className="calendar-event__action"
              disabled={!calEvent.remainSeats}
              onClick={handleBookedEventClick}
            >
              Записаться
            </button>
            <p className="calendar-event__remain-seats">
              {calEvent.remainSeats
                ? `Осталось ${calEvent.remainSeats} мест`
                : "Запись закрыта"}
            </p>
          </>
        )}
        {/* TO DO */}
        <button
          type="button"
          className="calendar-event__action calendar-event__action_open-popup"
        />
      </div>
    </article>
  );
}

CalendarEvent.propTypes = {
  calEvent: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    address: PropTypes.string,
    contact: PropTypes.string,
    remainSeats: PropTypes.number,
    booked: PropTypes.bool,
  }).isRequired,
};

export default CalendarEvent;
