import React from "react";
import "./ProfileMeetingForm.css";

const ProfileMeetingForm = ({ meeting = {}, onClose }) => {
  const [meetingData, setMeetingData] = React.useState({ meeting });
  const handleSubmit = (event) => {
    event.preventDefault();
    // отправка данных на сервер для добавления формы - onSubmit
    onClose();
  };

  const handleDateChange = (event) => {
    setMeetingData({ meetingData, date: new Date(event.target.value) });
  };

  const handleDeleteClick = () => {
    // попап удаления встречи
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="file" name="image" accept="image/*" />
        <span>Загрузить фото</span>
      </label>
      <div>
        <input
          className="profile-meeting-form__input"
          type="text"
          name="place"
          placeholder="Место встречи"
        />
        <label>
          <input type="date" name="date" onChange={handleDateChange} />
          <span>
            Дата{" "}
            {meetingData.date
              ? `${meetingData.date.getDate()}.${
                  meetingData.date.getMonth() + 1
                }.${meetingData.date.getFullYear()}`
              : "__.__.____"}
          </span>
        </label>
      </div>
      <textarea
        placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
        name="description"
      />
      <fieldset>
        <label>
          <input type="radio" value="great" name="rating" />
          <span></span>
        </label>
        <label>
          <input type="radio" value="normal" name="rating" />
          <span></span>
        </label>
        <label>
          <input type="radio" value="wrong" name="rating" />
          <span></span>
        </label>
        <p>хорошо</p>
      </fieldset>
      <button type="button" onClick={handleDeleteClick}>
        Удалить
      </button>
      <button type="submit">cоздать</button>
    </form>
  );
};

export default ProfileMeetingForm;
