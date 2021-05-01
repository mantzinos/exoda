import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";

const Fail = () => {
  const [check, setCheck] = useState(false);

  const go = () => {
    setCheck(!check);
  };
  if (check) {
    return <Redirect to="/login" />;
  }
  return (
    <section className="login">
      <div className="ola">
        <div className="title">
          <div>
            <h1>Λάθος password παρακαλώ προσπάθησε ξανά</h1>
          </div>

          <div>
            <button onClick={go} className="button">
              Return
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fail;
