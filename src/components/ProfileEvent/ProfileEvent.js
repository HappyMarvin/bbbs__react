import React from "react";
import { MONTHS } from "../../utils/constants";
import "./ProfileEvent.css";

const ProfileEvent = ({ eventData }) => {
  const eventdate = new Date(eventData.startAt);

  return (
    <li className="profile-event">
      <article className="profile-event__card">
        <h3 class="profile-event__date">
          <span class="profile-event__date-number">{eventdate.getDate()}</span>
          {MONTHS[eventdate.getMonth()]}
        </h3>
        <p class="profile-event__title">{eventData.title}</p>
      </article>
    </li>
  );
};

export default ProfileEvent;
