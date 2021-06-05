import React from "react";
import "./UserData.css";

import UserContext from "../../contexts/UserContext";

const UserData = () => {
  const { openPopupChooseCity } = React.useContext(UserContext);

  return (
    <UserContext.Consumer>
      {({ login, city, handleLogout }) => (
        <>
          {login && (
            <div className="user-data">
              <button
                className="user-data__settings-button"
                type="button"
                onClick={openPopupChooseCity}
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
            </div>
          )}
        </>
      )}
    </UserContext.Consumer>
  );
};

export default UserData;
