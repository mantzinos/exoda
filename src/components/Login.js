import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";

const Login = () => {
  const [getIt, setGetIt] = useState({
    username: "",
    password: "",
  });

  const [check, setCheck] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setGetIt(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const go = async event => {
    try {
      event.preventDefault();
      const me = await axios.post("http://localhost:5000/api/login", getIt);
      setCheck(prev => me.data);
      console.log(me.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  if (check === "User login") {
    return <Redirect to="/main" />;
  }
  return (
    <section className="login">
      <div className="ola">
        <div className="title">
          <div>
            <h1>Σύνδεση</h1>
          </div>
        </div>
        <div className="inputs">
          <div className="mylabel">
            <label htmlFor="username">Username</label>
          </div>
          <div className="myinput">
            <input onChange={handleChange} name="username" type="text" />
          </div>

          <div className="mylabel">
            <label htmlFor="password">Password</label>
          </div>
          <div className="myinput">
            <input onChange={handleChange} name="password" type="password" />
          </div>
          <div>
            <button onClick={go} className="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
