import React from "react";
import "./UserData.css";

import UserContext from "../../contexts/UserContext";
import Popup from "../Popup/Popup";
import PopupChooseCity from "../PopupChooseCity/PopupChooseCity";

const UserData = () => {
  const [isPopupChooseCity, setIsPopupChooseCity] = React.useState(false);

  return (
    <UserContext.Consumer>
      {({ login, city, handleLogout }) => (
        <>
          {login && (
            <div className="user-data">
              <button
                className="user-data__settings-button"
                type="button"
                onClick={() => setIsPopupChooseCity(true)}
              >
                {`${city.name}. Изменить город`}
              </button>
              <button
                className="user-data__settings-button"
                type="button"
                onClick={handleLogout}
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
      )}
    </UserContext.Consumer>
  );
};

export default UserData;
