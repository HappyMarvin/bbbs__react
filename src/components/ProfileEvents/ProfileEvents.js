import React from "react";
import ProfileEvent from "../ProfileEvent/ProfileEvent";
import "./ProfileEvents.css";

const ProfileEvents = ({ events }) => {
  return (
    <section className="profile-events" aria-label="Мероприятия">
      {events.length > 0 ? (
        <>
          <p className="profile-events__intro">Вы записаны на мероприятия:</p>
          <ul>
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

export default ProfileEvents;
