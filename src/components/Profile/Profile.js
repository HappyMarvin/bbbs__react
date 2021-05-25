import React from "react";
import ProfileEvents from "../ProfileEvents/ProfileEvents";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import "./Profile.css";

import meetingImage from "../../images/photo-personal-account.png";
import { TIME_DELAY } from "../../utils/constants";
import Loader from "../Loader/Loader";

const Profile = ({ isloggedIn }) => {
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
      setEvents([
        {
          id: 1,
          booked: true,
          address:
            "Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)",
          contact: "Александра, +7 926 356-78-90",
          title: "Субботний meet up: учимся проходить интевью",
          description:
            'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
          startAt: "2021-05-10T06:00:00Z",
          endAt: "2021-05-10T08:00:00Z",
          seats: 100,
          takenSeats: 0,
          city: 1,
        },
        {
          id: 2,
          booked: true,
          address:
            "Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)",
          contact: "Александра, +7 926 356-78-90",
          title: "Ресурсная группа «Вовлечение в волонтёрство»",
          description:
            'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
          startAt: "2021-05-16T06:00:00Z",
          endAt: "2021-05-16T08:00:00Z",
          seats: 100,
          takenSeats: 0,
          city: 1,
        },
      ]);
      setHistory([
        {
          id: 21,
          imageUrl: meetingImage,
          date: "2021-05-12T08:00:00Z",
          place: "Парк Горького",
          description:
            "Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось.  Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось. ",
          rating: "great", // great || normal || wrong\
          isShared: false,
        },
      ]);
      setIsloading(false);
    }, TIME_DELAY);
  }, []);

  return (
    <main className="profile" aria-label="Личный кабинет">
      {isLoading && <Loader />}
      {isloggedIn ? (
        <>
          <section className="profile__buttons" aria-label="Кнопки">
            <button className="profile__button-city">
              {city.name}. Изменить город
            </button>
            <button className="profile__button-exit">Выход</button>
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
