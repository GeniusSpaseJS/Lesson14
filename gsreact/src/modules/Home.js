import React, { useState } from "react";
import AccountCard from "./AccountCard";
import "./Home.css";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
  const [name, useName] = useState("");
  const [city, useCity] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [acc, useAcc] = useState(false);

  const HandleChangeEmail = (e) => {
    useEmail(e.target.value);
  };

  const HandleChangeName = (e) => {
    console.log(e.target.value);
    useName(e.target.value);
  };

  const HandleChangeCity = (e) => {
    useCity(e.target.value);
  };

  const HandleChangePass = (e) => {
    usePassword(e.target.value);
  };

  const OnSubmitForm = () => {
    return useAcc(true);
  };

  return (
    <div className="block">
      {acc ? (
        <AccountCard name={name} city={city} email={email} />
      ) : (
        <RegistrationForm
          handleChangePass={HandleChangePass}
          handleChangeCity={HandleChangeCity}
          handleChangeName={HandleChangeName}
          handleChangeEmail={HandleChangeEmail}
          onSubmitForm={OnSubmitForm}
          name={name}
          city={city}
          password={password}
          email={email}
        />
      )}
    </div>
  );
};

export default Home;
