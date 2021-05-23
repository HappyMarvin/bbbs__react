import React from "react";
import "./Profile.css";

const Profile = ({ isloggedIn }) => {
  const [isLoading, setIsloading] = React.useState(true);
  const [city, setCity] = React.useState({});

  React.useEffect(() => {
    setIsloading(true);
    // пока вместо запроса данных на сервер используем функцию setTimeout
    setTimeout(() => {
      setCity({
        id: 2,
        name: "Воронеж",
      });
      setIsloading(false);
    }, 1000);
  }, []);

  return (
    <main className="profile">
      {isLoading && <p>Загрузка</p>}
      {isloggedIn ? (
        <section className="profile__buttons">
          <button className="profile__button-city">
            {city.name}. Изменить город
          </button>
          <button className="profile__button-exit">Выйти</button>
        </section>
      ) : (
        <p>Не осуществлен вход</p>
      )}
    </main>
  );
};

export default Profile;
