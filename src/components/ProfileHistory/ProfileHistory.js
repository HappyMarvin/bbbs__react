import React from "react";
import "./ProfileHistory.css";

import ProfileMeetingForm from "../ProfileMeetingForm/ProfileMeetingForm";
import ProfileMeetting from "../ProfileMeeting/ProfileMeeting";

const ProfileHistory = ({ history, onShare }) => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleAddMeetingClick = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="profile-history" aria-label="История встреч">
      {history.length === 0 && (
        <p className="profile-history__intro">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только
          вам.
        </p>
      )}
      {isFormOpen ? (
        <ProfileMeetingForm onClose={closeForm} />
      ) : (
        <button
          className="profile-history__button-add"
          type="button"
          onClick={handleAddMeetingClick}
        >
          Добавить встречу
        </button>
      )}
      <ul>
        {history.map((meeting) => (
          <ProfileMeetting
            key={meeting.id}
            meeting={meeting}
            onShare={onShare}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProfileHistory;
