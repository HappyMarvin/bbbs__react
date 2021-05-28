import React from "react";
import Loader from "../Loader/Loader";
import "./PopupDeleteProfileMeeting.css";

const PopupDeleteProfileMeeting = ({ meeting, onClose, onDelete }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const closePopup = (evt) => {
    if (evt.target.classList.contains("popup")) {
      onClose();
    }
  };

  const handleDeleteMeetingClick = () => {
    setIsLoading(true);
    onDelete(
      meeting,
      () => {
        setIsLoading(false);
      },
      onClose
    );
  };

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
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default PopupDeleteProfileMeeting;
