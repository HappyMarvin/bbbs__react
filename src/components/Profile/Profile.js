import React from "react";
import ProfileEvents from "../ProfileEvents/ProfileEvents";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import "./Profile.css";

import { TIME_DELAY } from "../../utils/constants";
import Loader from "../Loader/Loader";
import { TEST_EVENTS, TEST_HISTORY } from "./ForTest";
import PopupDeleteProfileMeeting from "../PopupDeleteProfileMeeting/PopupDeleteProfileMeeting";

const Profile = ({ mix, isloggedIn }) => {
  const [isLoading, setIsloading] = React.useState(false);
  const [city, setCity] = React.useState({});
  const [events, setEvents] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [isPopupDeleteOpen, setIsPopupDeleteOpen] = React.useState(false);
  const [deleteMeeting, setDeleteMeeting] = React.useState({});

  const handleAddMeeting = (meeting, endLoading, closeMeetingForm) => {
    // TO DO: запрос на сервер для добавления встречи
    setTimeout(() => {
      setHistory([{ ...meeting, id: Math.random() }, ...history]);
      endLoading();
      closeMeetingForm(); // закрывать форму после ответа с сервера со статусом ОК
    }, TIME_DELAY);
  };

  const handleUpdateMeeting = (meeting, endLoading, closeMeetingForm) => {
    // TO DO: запрос на сервер для обновления данных встречи
    setTimeout(() => {
      setHistory(
        history.map((item) => (item.id === meeting.id ? meeting : item))
      );
      endLoading();
      closeMeetingForm(); // закрывать форму после ответа с сервера со статусом ОК
    }, TIME_DELAY);
  };

  const handleDeleteMetting = (meeting, endLoading, closePopup) => {
    // TO DO: запрос на сервер для удаления встречи
    console.log(meeting);
    setTimeout(() => {
      closePopup();
    }, TIME_DELAY);
  };

  const handleDeleteMeetingPopupOpen = (meeting) => {
    setDeleteMeeting(meeting);
    setIsPopupDeleteOpen(true);
  };

  const handleShareMeetingClick = (meetingId) => {
    // TO DO: отправить запрос на сервер и получить обновленную информацию
    const meetingUpdate = history.find((meeting) => meeting.id === meetingId);
    meetingUpdate.isShared = true;
    setTimeout(() => {
      setHistory((state) =>
        state.map((meeting) =>
          meeting.id === meetingUpdate.id ? meetingUpdate : meeting
        )
      );
    }, TIME_DELAY);
  };

  React.useEffect(() => {
    setIsloading(true);
    // пока вместо запроса данных на сервер используем функцию setTimeout
    setTimeout(() => {
      setCity({
        id: 2,
        name: "Воронеж",
      });
      setEvents(TEST_EVENTS);
      setHistory(TEST_HISTORY);
      setIsloading(false);
    }, TIME_DELAY);
  }, []);

  return (
    <main className={`profile ${mix}`} aria-label="Личный кабинет">
      {isLoading && <Loader />}
      {isloggedIn ? (
        <>
          <section className="profile__settings" aria-label="Кнопки">
            <button className="profile__settings-button" type="button">
              {city.name}. Изменить город
            </button>
            <button className="profile__settings-button" type="button">
              Выход
            </button>
          </section>

          <ProfileEvents events={events} />

          <ProfileHistory
            history={history}
            onAddMeeting={handleAddMeeting}
            onUpdateMeeting={handleUpdateMeeting}
            onDeleteMeeting={handleDeleteMeetingPopupOpen}
            onShare={handleShareMeetingClick}
          />

          {isPopupDeleteOpen && (
            <PopupDeleteProfileMeeting
              meeting={deleteMeeting}
              onDelete={handleDeleteMetting}
              onClose={() => setIsPopupDeleteOpen(false)}
            />
          )}
        </>
      ) : (
        <p>Не осуществлен вход</p>
      )}
    </main>
  );
};

export default Profile;
