import React from "react";
import config from "../../config";

const Phone = () => {
  return (
    <>
      <div className="nav-phone">
        <a href={config.phoneURL} title="phone">
         <i className="fa fa-mobile" /> <span className="label">{config.phoneNumber}</span>
        </a>
      </div>
    </>
  )
};

export default Phone;