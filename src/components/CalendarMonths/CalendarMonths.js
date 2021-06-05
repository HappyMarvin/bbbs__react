import React from "react";
import PropTypes from "prop-types";
import "./CalendarMonths.css";
import { MONTHS } from "../../utils/constants";

const CalendarMonths = ({ months, selectedMonths, onClickMonth }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return {
          value: item,
          title: MONTHS[item],
          isSelected: selectedMonths.includes(item),
        };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [months, selectedMonths]);

  return (
    <ul className="calendar-months__list">
      {data.map((month, index) => (
        <li key={index} className="calendar-months__item">
          <button
            type="button"
            className={`calendar-months__month ${
              month.isSelected && "calendar-months__month_selected"
            }`}
            onClick={() => onClickMonth(month.value)}
          >
            {month.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

CalendarMonths.propTypes = {
  months: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedMonths: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickMonth: PropTypes.func,
};

export default CalendarMonths;
