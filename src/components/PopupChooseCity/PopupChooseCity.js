import React from "react";
import "./PopupChooseCity.css";

import UserContext from "../../contexts/UserContext";
import { TIME_DELAY } from "../../utils/constants";
import Loader from "../Loader/Loader";

const PopupChooseCity = ({ onClose }) => {
  const user = React.useContext(UserContext);
  const [cities, setCities] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCityClick = (city) => {
    // TO DO: запрос на сервер для изменения города и изменения города у пользователя
    console.log(city);
  };

  React.useEffect(() => {
    setIsLoading(true);
    const getCities = () => {
      // TO DO: запрос на сервер для получения списка городов
      setTimeout(() => {
        const citiesTest = [
          { id: 1, name: "Москва", isPrimary: true },
          { id: 2, name: "Воронеж", isPrimary: false },
          { id: 3, name: "Алексин", isPrimary: false },
          { id: 4, name: "Барнаул", isPrimary: false },
          { id: 5, name: "Екатеринбург", isPrimary: false },
          { id: 6, name: "Зубцов", isPrimary: false },
          { id: 7, name: "Калининград", isPrimary: false },
          { id: 8, name: "Санкт-Петербург", isPrimary: true },
          { id: 9, name: "Киреевск", isPrimary: false },
          { id: 10, name: "Коломна", isPrimary: false },
          { id: 11, name: "Новомосковск", isPrimary: false },
          { id: 12, name: "Орехово-Зуево", isPrimary: false },
          { id: 13, name: "Тверь", isPrimary: false },
          { id: 14, name: "Тула", isPrimary: false },
        ];
        setCities([
          citiesTest.filter((city) => city.isPrimary),
          citiesTest.filter((city) => !city.isPrimary),
        ]);
        setIsLoading(false);
      }, TIME_DELAY);
    };

    getCities();
  }, []);

  return (
    <div className="popup-choose-city">
      {isLoading && <Loader />}
      <p className="popup-choose-city__title">Выберите ваш город</p>
      {cities.length > 0 && (
        <ul className="popup-choose-city__cities-groups">
          {cities
            .filter((item) => item.length > 0)
            .map((cityGroup, index) => (
              <li key={index} className="popup-choose-city__cities-group">
                <ul className="popup-choose-city__cities">
                  {cityGroup.map((city) => (
                    <li
                      key={city.id}
                      className="popup-choose-city__cities-item"
                    >
                      <p
                        className="popup-choose-city__city"
                        onClick={() => handleCityClick(city)}
                      >
                        {city.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default PopupChooseCity;
