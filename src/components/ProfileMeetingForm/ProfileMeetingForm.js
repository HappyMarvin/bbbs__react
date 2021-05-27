import React from "react";
import Loader from "../Loader/Loader";
import "./ProfileMeetingForm.css";

const ProfileMeetingForm = ({ meeting = {}, onClose, onSubmit }) => {
  const [meetingData, setMeetingData] = React.useState(meeting);
  const ratingValues = ["good", "normal", "bad"];
  const ratingText = {
    default: "Оцените проведенное время",
    good: "Было классно!",
    normal: "Нормально",
    bad: "Что-пошло не так",
  };
  const [isValid, setIsValid] = React.useState(true);
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
    setIsValid(input.closest("form").checkValidity());
  };

  // React.useEffect(() => {
  //   console.log(meetingData);
  // }, [meetingData]);

  return (
    <form className="profile-meeting-form" onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      <label className="profile-meeting-form__image">
        <input
          className="profile-meeting-form__input-hide"
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
        <input
          className="profile-meeting-form__input profile-meeting-form__info-date"
          type="date"
          name="date"
          onChange={handleDateChange}
        />
        <textarea
          className="profile-meeting-form__input profile-meeting-form__input_textarea profile-meeting-form__info-description"
          placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
          name="description"
        />
        <div className="profile-meeting-form__rating">
          {ratingValues.map((item, index) => (
            <label key={index} className="profile-meeting-form__rating-label">
              <input
                className="profile-meeting-form__input-hide"
                type="radio"
                value={item}
                name="rating"
                checked={item === meetingData.rating}
                onChange={handleChange}
              />
              <span
                className={`profile-meeting-form__rating-emoji profile-meeting-form__rating-emoji_type_${item} ${
                  item === meetingData.rating &&
                  "profile-meeting-form__rating-emoji_active"
                }`}
              ></span>
            </label>
          ))}
          <p
            className={`profile-meeting-form__rating-text profile-meeting-form__rating-text_type_${meetingData.rating}`}
          >
            {meetingData.rating
              ? ratingText[meetingData.rating]
              : ratingText.default}
          </p>
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
            disabled={!isValid}
          >
            {meeting.id ? "Сохранить" : "Добавить"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileMeetingForm;
