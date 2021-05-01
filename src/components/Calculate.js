import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
const axios = require("axios");

const Calculate = props => {
  const [dose, setDose] = useState([]);
  const [check, setCheck] = useState(false);
  const [sinolo, setSinolo] = useState(1);
  useEffect(() => {
    const fere = async () => {
      try {
        const me = await axios.get(
          `${process.env.REACT_APP_SERVER}/exoda/${props.match.params.name}`
        );
        // console.log(props.match.params);
        // console.log(me.data);
        setDose(me.data);
        console.log(dose);
      } catch (err) {
        console.log(err);
      }
    };
    fere();
  }, []);

  //   const myUser = dose[0].user.username;

  const returnPls = event => {
    setCheck(true);
  };

  if (check) {
    return <Redirect to={`/main/${dose[0].user.username}`} />;
  }

  return (
    <section className="calculate2">
      <div className="calcTitle">
        <div className="calcTitleInside">
          <h2>Έξοδα</h2>
        </div>
        <div className="calcTitleInside2">
          <button className="returnPls" onClick={returnPls}>
            Επιστροφή
          </button>
        </div>
      </div>
      <div className="myClassItems2">
        <div className="calcItemm">
          <div className="calcInside2">Σύνολο</div>
        </div>
        <div className="calcItemm">
          <div className="calcInside">Καφέδες φαγητά</div>
          <div className="calcInside">
            {!(dose.length === 0)
              ? dose
                  .filter(a => a.kafes !== undefined)
                  .map(a => a.kafes)
                  .reduce((a, b) => a + b)
              : 0}
          </div>
        </div>
        <div className="calcItemm">
          <div className="calcInside">Σούπερ μάρκετ</div>
          <div className="calcInside">
            {!(dose.length === 0)
              ? dose
                  .filter(a => a.supermarket !== undefined)
                  .map(a => a.supermarket)
                  .reduce((a, b) => a + b)
              : 0}
          </div>
        </div>
        <div className="calcItemm">
          <div className="calcInside">Λογαριασμοί</div>
          <div className="calcInside">
            {!(dose.length === 0)
              ? dose
                  .filter(a => a.logariasmoi !== undefined)
                  .map(a => a.logariasmoi)
                  .reduce((a, b) => a + b)
              : 0}
          </div>
        </div>
        <div className="calcItemm">
          <div className="calcInside">Αγορές ίντερνετ</div>
          <div className="calcInside">
            {!(dose.length === 0)
              ? dose
                  .filter(a => a.internet !== undefined)
                  .map(a => a.internet)
                  .reduce((a, b) => a + b)
              : 0}
          </div>
        </div>
      </div>
      {!(dose.length === 0) ? (
        dose.reverse().map(a => (
          <div className="myClassItems">
            <div className="calcItemm">
              <div className="calcInside">Ημερομηνία</div>
              <div className="calcInside">
                {new Date(a.date).toDateString()}
              </div>
            </div>
            <div className="calcItemm">
              <div className="calcInside">Καφέδες φαγητά</div>
              <div className="calcInside">{a.kafes}</div>
            </div>
            <div className="calcItemm">
              <div className="calcInside">Σούπερ μάρκετ</div>
              <div className="calcInside">{a.supermarket}</div>
            </div>
            <div className="calcItemm">
              <div className="calcInside">Λογαριασμοί</div>
              <div className="calcInside">{a.logariasmoi}</div>
            </div>
            <div className="calcItemm">
              <div className="calcInside">Αγορές ίντερνετ</div>
              <div className="calcInside">{a.internet}</div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Calculate;
