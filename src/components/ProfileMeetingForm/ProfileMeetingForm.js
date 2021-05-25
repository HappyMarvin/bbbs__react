import React from "react";
import "./ProfileMeetingForm.css";

const ProfileMeetingForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">создать</button>
    </form>
  );
};

export default ProfileMeetingForm;
