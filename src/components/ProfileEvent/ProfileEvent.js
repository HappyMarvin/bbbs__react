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
            {eventDate.getDate()}
          </span>
          {MONTHS[eventDate.getMonth()]}
        </h3>
        <p className="profile-event__title">{eventData.title}</p>
      </article>
    </li>
  );
};

export default ProfileEvent;
