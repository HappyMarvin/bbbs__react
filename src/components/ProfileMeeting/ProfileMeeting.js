import React from "react";
import "./ProfileMeeting.css";

import { MONTHS } from "../../utils/constants";

const ProfileMeetting = ({ meeting, onShare }) => {
  const meetingDate = new Date(meeting.date);

  let ratingText;
  if (meeting.rating === "great") {
    ratingText = "было классно";
  } else if (meeting.rating === "normal") {
    ratingText = "нормально";
  } else if (meeting.rating === "wrong") {
    ratingText = "ошибка";
  }

  return (
    <li>
      <article>
        <figure>
          <img src={meeting.imageUrl} alt="фото встречи" />
          <figcaption>
            <h3>{meeting.place}</h3>
            <p>
              <span>
                {`${
                  MONTHS[meetingDate.getMonth()]
                }, ${meetingDate.getFullYear()} `}
              </span>
              <span>{meetingDate.getDate()}</span>
            </p>
            <p>{meeting.description}</p>
            <div>
              <div></div>
              <p>{ratingText}</p>
            </div>
            <div>
              {meeting.isShared ? (
                <p>открыто</p>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onShare(meeting.id);
                  }}
                >
                  поделиться
                </button>
              )}
              <button type="button">Редактировать</button>
              <button type="button">Удалить</button>
            </div>
          </figcaption>
        </figure>
      </article>
    </li>
  );
};

export default ProfileMeetting;
