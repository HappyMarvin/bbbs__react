import React from "react";
import PropTypes from "prop-types";
import "./CalendarEvent.css";

function CalendarEvent({ event }) {
  return (
    <>
      <div className="calendar-event calendar-event_onclick">
        <div className="calendar-event__about">
          <p className="calendar-event__participants">Волонтёры + дети</p>
          <p className="calendar-event__date">декабрь / понедельник</p>
          <h2 className="calendar-event__event">
            Субботний meet up: учимся проходить интевью
          </h2>
          <p className="calendar-event__day">05</p>
        </div>
        <ul className="calendar-event__contacts">
          <li className="calendar-event__contacts-item">
            <p className="calendar-event__time">12:00–14:00</p>
          </li>
          <li className="calendar-event__contacts-item">
            <p className="calendar-event__adress">
              Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
            </p>
          </li>
          <li className="calendar-event__contacts-item">
            <p className="calendar-event__phone">
              Александра, +7 926 356-78-90
            </p>
          </li>
        </ul>
        <div className="calendar-event__sign-up">
          <div className="calendar-event__sign-up_flex">
            <button
              className="button button_color_blue button_color_blue_onclick button_color_blue-open"
              type="button"
            >
              Отменить запись
            </button>
            <p className="calendar-event__sign-up__type_text">
              Осталось 5 мест
            </p>
          </div>
          <button
            className="button_color_blue button_color_blue-round button_color_blue-open"
            type="button"
          >
            <svg
              className="calendar-event__btn"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
              <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
              <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
              <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
            </svg>
          </button>
        </div>
      </div>

      <div className="calendar-event">
        <div className="calendar-event__about">
          <p className="calendar-event__participants">Волонтёры</p>
          <p className="calendar-event__date">декабрь / понедельник</p>
          <h2 className="calendar-event__event">
            Ресурсная группа «Вовлечение в волонтёрство»
          </h2>
          <p className="calendar-event__day">16</p>
        </div>
        <ul className="calendar-event__contacts">
          <li className="calendar-event__contacts-item">
            <p className="calendar-event__time">12:00–14:00</p>
          </li>
          <li className="calendar-event__contacts-item">
            <p className="calendar-event__adress">
              Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
            </p>
          </li>
          <li className="calendar-event__contacts-item">
            <p className="calendar-event__phone">
              Александра, +7 926 356-78-90
            </p>
          </li>
        </ul>
        <div className="calendar-event__sign-up">
          <div className="calendar-event__sign-up_flex">
            <button
              className="button button_color_blue button_color_blue-nonactive"
              type="button"
              disabled="disabled"
            >
              Записаться
            </button>
            <p className="calendar-event__sign-up__type_text">Запись закрыта</p>
          </div>
          <button
            className="button_color_blue button_color_blue-round button_color_blue-open"
            type="button"
          >
            <svg
              className="calendar-event__btn"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" stroke="#224CFF" />
              <circle cx="13.3346" cy="20.0002" r="1.66667" fill="#224CFF" />
              <circle cx="20.0026" cy="19.9999" r="1.66667" fill="#224CFF" />
              <circle cx="26.6667" cy="19.9999" r="1.66667" fill="#224CFF" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

CalendarEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default CalendarEvent;
