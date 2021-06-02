import React from "react";
import { MONTHS } from "../../utils/constants";
import "./ProfileEvent.css";

const ProfileEvent = ({ eventData }) => {
  const eventDate = new Date(eventData.startAt);

  return (
    <li className="profile-event">
      <article className="profile-event__card">
        <h3 className="profile-event__date">
          <span className="profile-event__date-number">
            {`00${eventDate.getDate()}`.slice(-2)}
          </span>
          <span className="profile-event__date-month">
            {MONTHS[eventDate.getMonth()]}
          </span>
        </h3>
        <p className="profile-event__title">{eventData.title}</p>
      </article>
    </li>
  );
};

export default ProfileEvent;
