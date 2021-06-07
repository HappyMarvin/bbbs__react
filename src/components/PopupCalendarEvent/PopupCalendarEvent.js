import React from "react";
import PropTypes from "prop-types";
import "./PopupCalendarEvent.css";

import SuccesImage from "../../images/success-popup.svg";
import ErrorImage from "../../images/events-success-popup.svg";
import Loader from "../Loader/Loader";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import { MONTHS } from "../../utils/constants";

const PopupCalendarEvent = ({
  calEvent,
  onClose,
  step,
  onConfirmingUpdate,
  onUpdate,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEventUpdate = () => {
    setIsLoading(true);
    onUpdate(calEvent, () => {
      setIsLoading(false);
    });
  };

  return (
    <div className="popup-calendar-event">
      {isLoading && <Loader isAbsolute={true} />}
      {step === "look" && (
        <CalendarEvent
          mix="popup-calendar-event__event"
          calEvent={calEvent}
          isPopup={true}
          onConfirmingUpdate={onConfirmingUpdate}
        />
      )}
      {step === "update" && (
        <div className="popup-calendar-event__booking">
          <div className="popup-calendar-event__text">
            <p className="popup-calendar-event__paragraph">
              {`Подтвердить ${
                calEvent.booked ? "отмену записи" : "запись"
              } на мероприятие`}
            </p>
            <p className="popup-calendar-event__paragraph">
              {`«${calEvent.title}»`}
            </p>
            <p className="popup-calendar-event__paragraph">
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
          <div className="popup-calendar-event__actions">
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
      {(step === "success" || step === "error") && (
        <div className="popup-calendar-event__resalt">
          {
            // TO DO: json-animation
            <img
              className="popup-calendar-event__resalt-image"
              src={step === "success" ? SuccesImage : ErrorImage}
              alt="Успешное обновление"
            />
          }
          {step === "success" ? (
            <>
              <div className="popup-calendar-event__text">
                <p className="popup-calendar-event__paragraph">
                  {calEvent.booked
                    ? "Вы отменили запись на мероприятие"
                    : "Вы записаны на мероприятие"}
                </p>
                <p className="popup-calendar-event__paragraph">
                  {`«${calEvent.title}»`}
                </p>
                <p className="popup-calendar-event__paragraph">
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
              {!calEvent.booked && (
                <div className="popup-calendar-event__text">
                  <p className="popup-calendar-event__paragraph">
                    Если у вас не получится прийти — отмените, пожалуйста,
                    запись.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="popup-calendar-event__text">
              <p className="popup-calendar-event__paragraph">
                Ошибка при отправке данных на сервер
              </p>
            </div>
          )}
          <button
            type="button"
            className="popup-calendar-event__button popup-calendar-event__button_cancel"
            onClick={onClose}
          >
            Вернуться к календарю
          </button>
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
  step: PropTypes.oneOf(["look", "update", "success", "error", ""]),
  onUpdate: PropTypes.func,
  onConfirmingUpdate: PropTypes.func,
};

export default PopupCalendarEvent;
