import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";

const Register = () => {
  const [change, setChange] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [sub, setSub] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setChange(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSub = async event => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER}/register`,
        change
      );
      console.log(res.data);
      setSub(prev => res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (sub === "ok") {
    return <Redirect to="/login" />;
  }
  return (
    <section className="register">
      <div className="ola2">
        <div className="title">
          <div>
            <h1>Εγγραφή</h1>
          </div>
        </div>
        <form className="inputs" onSubmit={handleSub}>
          <div className="mylabel">
            <label htmlFor="username">Username</label>
          </div>
          <div className="myinput">
            <input
              required
              onChange={handleChange}
              name="username"
              type="text"
              minLength="3"
              maxLength="10"
            />
          </div>

          <div className="mylabel">
            <label htmlFor="password">Password</label>
          </div>
          <div className="myinput">
            <input
              required
              onChange={handleChange}
              name="password"
              type="password"
              minLength="3"
              maxLength="10"
            />
          </div>
          <div className="mylabel">
            <label htmlFor="email">Email</label>
          </div>
          <div className="myinput">
            <input required onChange={handleChange} name="email" type="email" />
          </div>
          <div>
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
