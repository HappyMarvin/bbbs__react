import React from "react";
import Loader from "../Loader/Loader";
import "./ProfileMeetingForm.css";

const ProfileMeetingForm = ({
  meeting = { place: "", description: "" },
  mix,
  onClose,
  onSubmit,
  onDelete,
}) => {
  // TO DO: добавление изображения
  const [meetingData, setMeetingData] = React.useState(meeting);
  const [meetingDate, setMeetingDate] = React.useState("");
  const ratingValues = ["good", "normal", "bad"];
  const ratingText = {
    default: "Оцените проведенное время",
    good: "Было классно!",
    normal: "Нормально",
    bad: "Что-пошло не так",
  };
  const [isValid, setIsValid] = React.useState(!!meetingData.id);
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

  const handleDeleteClick = () => {
    onDelete(meetingData);
  };

  const handleChange = (event) => {
    const input = event.target;
    const { value, name, type } = input;
    if (type === "date") {
      const d = new Date(event.target.value);
      if (!isNaN(d.getTime())) {
        setMeetingDate(d.toISOString().slice(0, 10));
        setMeetingData({ ...meetingData, date: d.toISOString() });
      }
    } else {
      setMeetingData({ ...meetingData, [name]: value });
    }
    setIsValid(input.closest("form").checkValidity());
  };

  React.useState(() => {
    const d = new Date(meeting.date);
    if (!isNaN(d.getTime())) setMeetingDate(d.toISOString().slice(0, 10));
  }, []);

  return (
    <form className={`profile-meeting-form ${mix}`} onSubmit={handleSubmit}>
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
          value={meetingData.place}
          onChange={handleChange}
          required
        />
        <input
          className="profile-meeting-form__input profile-meeting-form__info-date"
          type="date"
          name="date"
          value={meetingDate}
          onChange={handleChange}
          required
        />
        <textarea
          className="profile-meeting-form__input profile-meeting-form__input_textarea profile-meeting-form__info-description"
          placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
          name="description"
          value={meetingData.description}
          onChange={handleChange}
          required
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
