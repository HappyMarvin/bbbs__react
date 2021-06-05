import React from "react";
import Logo from "../Logo/Logo";

import "./Bbbs.css";

import blueLogo from "../../images/logoSBSS-blue.svg";

export default function Bbbs() {
  return (
    <div className="bbbs">
      <div className="bbbs__logo">
        <Logo place="mainpage" image={blueLogo} />
      </div>
      <div className="bbbs__about">
        <p className="bbbs__text">
          Наставники.про&nbsp;&mdash; цифровая информационная платформа
          огрганизации &laquo;Старшие Братья Старшие Сестры&raquo;. Созданная
          для поддержки наставников программы.
        </p>
      </div>
    </div>
  );
}
