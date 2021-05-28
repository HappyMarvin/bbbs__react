import React from "react";
import UserContext from "../../contexts/UserContext";
import { TIME_DELAY } from "../../utils/constants";

const PopupChooseCity = ({ onClose }) => {
  const user = React.useContext(UserContext);
  const [cities, setCities] = React.useState([]);

  const handleCityClick = (city) => {
    // TO DO: запрос на сервер для изменения города и изменения города у пользователя
    console.log(city);
  };

  React.useEffect(() => {
    const getCities = () => {
      // TO DO: запрос на сервер для получения списка городов
      setTimeout(() => {
        const citiesTest = [];
        setCities([
          citiesTest.filter((city) => city.isPrimary),
          citiesTest.filter((city) => !city.isPrimary),
        ]);
      }, TIME_DELAY);
    };

    getCities();
  }, []);

  return (
    <div>
      <p>Выберите ваш город</p>
      {cities.length > 0 && (
        <ul>
          {cities.map((cityGroup) => {
            cityGroup.length > 0 && (
              <ul>
                {cityGroup.map((city) => (
                  <li>
                    <p onClick={handleCityClick}>{city.name}</p>
                  </li>
                ))}
              </ul>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PopupChooseCity;
