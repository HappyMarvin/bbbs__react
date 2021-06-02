import React from "react";
import "./ProfileHistory.css";

import ProfileMeetingForm from "../ProfileMeetingForm/ProfileMeetingForm";
import ProfileMeetting from "../ProfileMeeting/ProfileMeeting";

const ProfileHistory = ({
  history,
  onAddMeeting,
  onUpdateMeeting,
  onDeleteMeeting,
  onShare,
}) => {
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
        <ProfileMeetingForm
          onClose={closeForm}
          onSubmit={onAddMeeting}
          onDelete={closeForm}
        />
      ) : (
        <label className="profile-history__add">
          <button
            className="profile-history__add-button"
            type="button"
            onClick={handleAddMeetingClick}
          />
          <span className="profile-history__add-text">Добавить встречу</span>
        </label>
      )}
      <ul className="profile-history__list">
        {history.map((meeting) => (
          <ProfileMeetting
            key={meeting.id}
            meeting={meeting}
            onUpdate={onUpdateMeeting}
            onDelete={onDeleteMeeting}
            onShare={onShare}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProfileHistory;
