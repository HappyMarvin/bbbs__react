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
export default SelectList;
