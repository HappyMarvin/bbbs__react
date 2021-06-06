import React from "react";

import "./PopupVideo.css";

export default function PopupVideo({ isOpen, onClose }) {
  function handleOverlayClose(e) {
    if (isOpen && e.currentTarget === e.target) {
      onClose(e.target);
    }
  }

  React.useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleCloseByEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [onClose, isOpen]);
  return (
    <div
      className={
        isOpen
          ? `popup-video popup_type_video popup_opened`
          : `popup-video popup_type_video`
      }
      onClick={handleOverlayClose}
    >
      <div className="popup__container popup__container_video">
        <iframe
          className="popup__video-item"
          src="https://www.youtube.com/embed/tGZUSEtsy7E?controls=0&iv_load_policy=3&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2 className="popup__video-title title">
          Что в силах волонтера-наставника?
        </h2>
        <p className="caption popup__video-caption">
          Иван Рустаев, волонтер-наставник
        </p>
      </div>
    </div>
  );
}
