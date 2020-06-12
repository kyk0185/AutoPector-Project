import React, {useState} from "react";
import '../scss/Header.scss';

const Header = ({currentTime}) => {

  return(
    <div className="header-frame">
      <div className="header-frame-centerAlign">
        <h2>Autopector (데이터 정합성 검증)</h2>
      </div>
      <div className="header-frame-rightAlign">
        <h5>{currentTime}</h5>
      </div>
    </div>
  )
}
export default Header;