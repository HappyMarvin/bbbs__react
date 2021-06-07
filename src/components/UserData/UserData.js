import React from "react";
import "./UserData.css";

import AppContext from "../../contexts/AppContext";

const UserData = () => {
  const { user, handleLogout, openPopupChooseCity } =
    React.useContext(AppContext);

  return (
    user.login && (
      <div className="user-data">
        <button
          className="user-data__settings-button"
          type="button"
          onClick={openPopupChooseCity}
        >
          {`${user.city.name}. Изменить город`}
        </button>
        <button
          className="user-data__settings-button"
          type="button"
          onClick={handleLogout}
        >
          Выход
        </button>
      </div>
    )
  );
};

export default UserData;
