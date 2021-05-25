import React from "react";
import ProfileMeetingForm from "../ProfileMeetingForm/ProfileMeetingForm";
import "./ProfileHistory.css";

const ProfileHistory = ({ history }) => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleAddMeetingClick = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="profile-meetings">
      {isFormOpen ? (
        <ProfileMeetingForm onClose={closeForm} />
      ) : (
        <button
          className="profile-meetings__button-add"
          type="button"
          onClick={handleAddMeetingClick}
        >
          Добавить встречу
        </button>
      )}
    </section>
  );
};

export default ProfileHistory;
