import React from "react";
import ProfileEvents from "../ProfileEvents/ProfileEvents";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import "./Profile.css";

import { TIME_DELAY } from "../../utils/constants";
import Loader from "../Loader/Loader";
import { TEST_EVENTS, TEST_HISTORY } from "./ForTest";

const Profile = ({ mix, isloggedIn }) => {
  const [isLoading, setIsloading] = React.useState(true);
  const [city, setCity] = React.useState({});
  const [events, setEvents] = React.useState([]);
  const [history, setHistory] = React.useState([]);

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
    }, TIME_DELAY / 10);
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

          <ProfileHistory history={history} onShare={handleShareMeetingClick} />
        </>
      ) : (
        <p>Не осуществлен вход</p>
      )}
    </main>
  );
};

export default Profile;
