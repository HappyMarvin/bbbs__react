import React from "react";
import "./UserData.css";

import UserContext from "../../contexts/UserContext";
import Popup from "../Popup/Popup";
import PopupChooseCity from "../PopupChooseCity/PopupChooseCity";

const UserData = () => {
  const user = React.useContext(UserContext);
  const [isPopupChooseCity, setIsPopupChooseCity] = React.useState(false);

  return (
    <>
      {user.login && (
        <div className="user-data">
          <button
            className="user-data__settings-button"
            type="button"
            onClick={() => setIsPopupChooseCity(true)}
          >
            {`${user.city.name}. Изменить город`}
          </button>
          <button
            className="user-data__settings-button"
            type="button"
            onClick={user.onExit}
          >
            Выход
          </button>
          {isPopupChooseCity && (
            <Popup
              component={PopupChooseCity}
              onClose={() => setIsPopupChooseCity(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default UserData;
