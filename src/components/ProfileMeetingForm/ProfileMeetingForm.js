import React from "react";
import Loader from "../Loader/Loader";
import "./ProfileMeetingForm.css";

const ProfileMeetingForm = ({ meeting = {}, onClose, onSubmit }) => {
  const [meetingData, setMeetingData] = React.useState(meeting);
  // const [ratingText]
  const [isValid, setIsValid] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    onSubmit(
      meetingData,
      () => {
        setIsLoading(false);
      },
      () => {
        onClose();
      }
    );
  };

  const handleDateChange = (event) => {
    setMeetingData({ meetingData, date: new Date(event.target.value) });
  };

  const handleDeleteClick = () => {
    // попап удаления встречи
  };

  const handleChange = (event) => {
    const input = event.target;
    const { value, name } = input;
    setMeetingData({ ...meetingData, [name]: value });
    // setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: input.validationMessage });
    // setIsValid(input.closest("form").checkValidity());
  };

  React.useEffect(() => {
    console.log(meetingData);
  }, [meetingData]);

  return (
    <form className="profile-meeting-form" onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      <label className="profile-meeting-form__image">
        <input
          className="profile-meeting-form__image-input"
          type="file"
          name="image"
          accept="image/*"
        />
        <span className="profile-meeting-form__image-text">Загрузить фото</span>
      </label>
      <div className="profile-meeting-form__info">
        <input
          className="profile-meeting-form__input profile-meeting-form__info-place"
          type="text"
          name="place"
          placeholder="Место встречи"
        />
        <label className="profile-meeting-form__info-date">
          <input type="date" name="date" onChange={handleDateChange} />
          <span>
            {/* {meetingData.date
              ? `${meetingData.date.getDate()}.${
                  meetingData.date.getMonth() + 1
                }.${meetingData.date.getFullYear()}`
              : "Дата __.__.____"} */}
            "hi"
          </span>
        </label>
        <textarea
          className="profile-meeting-form__info-description"
          placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
          name="description"
        />
        <div className="profile-meeting-form__info-rating">
          <label>
            <input
              type="radio"
              value="good"
              name="rating"
              onChange={handleChange}
            />
            <span></span>
          </label>
          <label>
            <input
              type="radio"
              value="normal"
              name="rating"
              onChange={handleChange}
            />
            <span></span>
          </label>
          <label>
            <input
              type="radio"
              value="bad"
              name="rating"
              onChange={handleChange}
            />
            <span></span>
          </label>
          <p>{"hi"}</p>
        </div>
        <div className="profile-meeting-form__buttons">
          <button
            className="profile-meeting-form__button profile-meeting-form__button-reset"
            type="button"
            onClick={handleDeleteClick}
          >
            Удалить
          </button>
          <button
            className="profile-meeting-form__button profile-meeting-form__button-submit"
            type="submit"
            disabled={isValid}
          >
            {meeting.id ? "Сохранить" : "Добавить"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileMeetingForm;
