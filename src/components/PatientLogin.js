import React from "react";
import config from "../../config";

const PatientLogin = () => {
  return (
    <div className="nav-login">
      <a href={config.patientLoginURL} target="_blank" rel="noreferrer">
        <i className="fa fa-user-circle"></i> Patient Login
      </a>
    </div>
  )
};

export default PatientLogin;
