import React from "react";
import "./Home.css";

const AccountCard = ({ name, city, email }) => {
  return (
    <div className="block">
      <p>Account Card</p>
      <div className="formInput">
        <p className="accText">Name :</p>
        <p className="accText">{name}</p>
      </div>
      <div className="formInput">
        <p className="accText">City :</p>
        <p className="accText">{city}</p>
      </div>
      <div className="formInput">
        <p className="accText">Email :</p>
        <p className="accText">{email}</p>
      </div>
    </div>
  );
};

export default AccountCard;
