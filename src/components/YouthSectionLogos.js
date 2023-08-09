import React from "react";
import mydc_logo from "../images/mydc_logo.png";
import sk_logo from "../images/sk_logo.png";
import yds_logo from "../images/yds_logo.png";

function YouthSectionLogos() {
  return (
    <div className="row">
      <div className="col text-end">
        <img src={mydc_logo} className="youthSection__logo" />
        <img src={sk_logo} className="youthSection__logo" />
        <img src={yds_logo} className="youthSection__logo" />
      </div>
    </div>
  );
}

export default YouthSectionLogos;
