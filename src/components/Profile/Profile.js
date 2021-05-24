import React from "react";
import ProfileEvents from "../ProfileEvents/ProfileEvents";
import "./Profile.css";

const Profile = ({ isloggedIn }) => {
  const [isLoading, setIsloading] = React.useState(true);
  const [city, setCity] = React.useState({});
  const [events, setEvents] = React.useState([]);

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
      setIsloading(false);
    }, 1000);
  }, []);

  return (
    <main className="profile" aria-label="Личный кабинет">
      {isLoading && <p>Загрузка</p>}
      {isloggedIn ? (
        <>
          <section className="profile__buttons" aria-label="Кнопки">
            <button className="profile__button-city">
              {city.name}. Изменить город
            </button>
            <button className="profile__button-exit">Выход</button>
          </section>

          <ProfileEvents events={events} />
        </>
      ) : (
        <p>Не осуществлен вход</p>
      )}
    </main>
  );
};

export default Profile;
