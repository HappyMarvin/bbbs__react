import React from "react";
import "./PopupDeleteProfileMeeting.css";

const PopupDeleteProfileMeeting = ({ meeting, onClose, onDelete }) => {
  const closePopup = (evt) => {
    if (evt.target.classList.contains("popup")) {
      onClose();
    }
  };

  const handleDeleteMeetingClick = () => {
    onDelete(meeting, () => {}, onClose);
  };

  // React.useEffect(() => {
  //   console.log(meeting);
  // }, []);

  return (
    <div className="popup popup-delete-profile-meeting" onClick={closePopup}>
      <div className="popup-delete-profile-meeting__container">
        <p className="popup-delete-profile-meeting__text">delete meeting</p>
        <div className="popup-delete-profile-meeting__buttons">
          <button
            className="popup-delete-profile-meeting__button"
            type="button"
            onClick={onClose}
          >
            no
          </button>
          <button
            className="popup-delete-profile-meeting__button"
            type="button"
            onClick={handleDeleteMeetingClick}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDeleteProfileMeeting;
