import React from "react";
import PropTypes from "prop-types";
import "./SelectList.css";

function SelectList({ list, mix }) {
  return (
    <div className="select-list">
      <button
        className="select-list__button select-list__button_active"
        type="button"
      >
        Декабрь
      </button>
      <button className="select-list__button" type="button">
        Январь
      </button>
      <button className="select-list__button" type="button">
        Февраль
      </button>
    </div>
  );
}

SelectList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  mix: PropTypes.string,
};

export default SelectList;
