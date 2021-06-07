import React from "react";
import PropTypes from "prop-types";
import "./ProfileEvents.css";
import ProfileEvent from "../ProfileEvent/ProfileEvent";

const ProfileEvents = ({ events }) => {
  return (
    <section className="profile-events" aria-label="Мероприятия">
      {events.length > 0 ? (
        <>
          <p className="profile-events__intro">Вы записаны на мероприятия:</p>
          <ul className="profile-events__list">
            {events.map((eventData) => (
              <ProfileEvent key={eventData.id} eventData={eventData} />
            ))}
          </ul>
        </>
      ) : (
        <p className="profile-events__intro">У вас нет записи на мероприятия</p>
      )}
    </section>
  );
};

ProfileEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileEvents;
