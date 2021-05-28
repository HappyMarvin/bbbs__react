import React from "react";
import "./UserData.css";

import UserContext from "../../contexts/UserContext";

const UserData = () => {
  const user = React.useContext(UserContext);

  return (
    <>
      {user.login && (
        <div className="user-data">
          <button className="user-data__settings-button" type="button">
            {`${user.city.name}. Изменить город`}
          </button>
          <button
            className="user-data__settings-button"
            type="button"
            onClick={user.onExit}
          >
            Выход
          </button>
        </div>
      )}
    </>
  );
};

export default UserData;
