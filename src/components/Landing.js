import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  console.log(process.env.SERVER_URL);
  return (
    <section className="landing">
      <div className="land">
        <div>
          <Link className="button" to="/login">
            Σύνδεση
          </Link>
        </div>
        <div>
          <Link className="button" to="/register">
            Εγγραφή
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
