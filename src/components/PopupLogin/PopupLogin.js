import React from "react";
import PropTypes from "prop-types";
import "./PopupLogin.css";
import Loader from "../Loader/Loader";
import { TIME_DELAY } from "../../utils/constants";
import UserContext from "../../contexts/UserContext";

const PopupLogin = ({ onClose }) => {
  const { handleLogin } = React.useContext(UserContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [userData, setUserData] = React.useState({ name: "", password: "" });

  const handleChange = (event) => {
    const input = event.target;
    const { name, value } = input;
    setUserData({ ...userData, [name]: value });
    setIsValid(input.closest("form").checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handleLogin(userData, () => {
        setIsLoading(false);
        onClose();
      });
    }, TIME_DELAY);
  };

  return (
    <form className={`popup-login`} onSubmit={handleSubmit}>
      {isLoading && <Loader isAbsolute={true} />}
      <p className="popup-login__title">Вход</p>
      <p className="popup-login__text">
        Вход в личный кабинет доступен наставникам программы «Старшие Братья
        Старшие Сёстры».
      </p>
      <p className="popup-login__text">
        Пожалуйста, введите логин и пароль из письма. Если вам не приходило
        письмо, свяжитесь с вашим куратором.
      </p>
      <input
        type="text"
        className="popup-login__input"
        name="name"
        placeholder="Логин"
        required
        value={userData.name}
        onChange={handleChange}
      />
      <input
        type="password"
        className="popup-login__input"
        name="password"
        placeholder="Пароль"
        value={userData.password}
        onChange={handleChange}
      />
      <button type="button" className="popup-login__button-forgot">
        Забыли пароль?
      </button>
      <button
        type="submit"
        className="popup-login__button-submit"
        disabled={!isValid}
      >
        Войти
      </button>
      <button
        type="button"
        className="popup-login__button-close"
        onClick={onClose}
      />
    </form>
  );
};

PopupLogin.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupLogin;
