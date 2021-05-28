import React from "react";
import ProfileEvents from "../ProfileEvents/ProfileEvents";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import "./Profile.css";

import { TEST_EVENTS, TEST_HISTORY } from "./ForTest";
import { TIME_DELAY } from "../../utils/constants";
import Loader from "../Loader/Loader";
import PopupDeleteProfileMeeting from "../PopupDeleteProfileMeeting/PopupDeleteProfileMeeting";
import UserContext from "../../contexts/UserContext";

const Profile = ({ mix }) => {
  const [isLoading, setIsloading] = React.useState(false);
  const user = React.useContext(UserContext);
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

  const handleDeleteMetting = (meeting, endLoading) => {
    // TO DO: запрос на сервер для удаления встречи
    setTimeout(() => {
      setHistory(history.filter((item) => item.id !== meeting.id));
      endLoading();
    }, TIME_DELAY);
  };

  const handleShareMeeting = (meeting, endLoading) => {
    // TO DO: запрос на сервер поделиться встречей
    setTimeout(() => {
      setHistory(
        history.map((item) =>
          item.id === meeting.id ? { ...meeting, isShared: true } : item
        )
      );
      endLoading();
    }, TIME_DELAY);
  };

  const handleDeleteMeetingPopupOpen = (meeting) => {
    setDeleteMeeting(meeting);
    setIsPopupDeleteOpen(true);
  };

  React.useEffect(() => {
    if (Object.keys(user).length) {
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
    }
  }, [user]);

  return (
    <main className={`profile ${mix}`} aria-label="Личный кабинет">
      {isLoading && <Loader />}
      {Object.keys(user).length ? (
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
            onShare={handleShareMeeting}
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
