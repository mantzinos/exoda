import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Calculate from "./Calculate";

const Main = props => {
  const [lastOne, setLastOne] = useState(true);
  const [user, setUser] = useState({});
  const [item, setItem] = useState(true);
  const [palia, setPalia] = useState("");
  const [newTest, setNewTest] = useState("");
  const [mytest, setMytest] = useState();
  const [change, setChange] = useState({
    kafes: "",
    logariasmoi: "",
    supermarket: "",
    internet: "",
    user: {},
  });
  // kafes: "",
  // supermarket: "",
  // logariasmoi: "",
  // internet: "",
  useEffect(() => {
    const getme = async () => {
      const me = await axios.get(
        `${process.env.REACT_APP_SERVER}/main/${props.match.params.name}`
      );
      setUser(me.data);
      // console.log(user);
    };
    getme();
  }, []);

  const calcItem = event => {
    const { title } = event.target;
    console.log(mytest);
    console.log(title);
    if (
      title === "add" ||
      title === "a" ||
      title === "b" ||
      title === "c" ||
      title === "d"
    ) {
      if (title !== "add") {
        const ff = async () => {
          await setPalia(prev => title);
          setItem(prev => !prev);
        };
        ff();
      } else {
        const ff11 = async () => {
          await setItem(prev => !prev);
        };
        ff11();
      }
    }

    if (!item) {
      switch (title) {
        case "1":
          const ff1 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff1();
          break;
        case "2":
          const ff2 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff2();
          break;
        case "3":
          const ff3 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff3();
          break;
        case "4":
          const ff4 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff4();
          break;
        case "5":
          const ff5 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff5();
          break;
        case "6":
          const ff6 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff6();
          break;
        case "7":
          const ff7 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff7();
          break;
        case "8":
          const ff8 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff8();
          break;
        case "9":
          const ff9 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff9();
          break;
        case "0":
          const ff0 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff0();
          break;
        case ".":
          const ff00 = async () => {
            await setNewTest(prev => prev + title);
          };
          ff00();
          break;
        case "del":
          setNewTest(prev => "");
          break;
        case "add":
          if (palia === "a" && newTest !== "") {
            const bbb = async () => {
              await setMytest(prev => {
                return {
                  ...prev,
                  ["kafes"]: newTest,
                };
              });
            };
            bbb();
            setNewTest(prev => "");
          } else if (palia === "b" && newTest !== "") {
            const bbb2 = async () => {
              await setMytest(prev => {
                return {
                  ...prev,
                  ["supermarket"]: newTest,
                };
              });
            };
            bbb2();
            setNewTest(prev => "");
          } else if (palia === "c" && newTest !== "") {
            const bbb3 = async () => {
              await setMytest(prev => {
                return {
                  ...prev,
                  ["logariasmoi"]: newTest,
                };
              });
            };
            bbb3();
            setNewTest(prev => "");
          } else if (palia === "d" && newTest !== "") {
            const bbb4 = async () => {
              await setMytest(prev => {
                return {
                  ...prev,
                  ["internet"]: newTest,
                };
              });
            };
            bbb4();
            setNewTest(prev => "");
          }
          break;
        default:
          console.log("Error");
      }
    }
  };

  const dostaOla = async () => {
    if (mytest !== undefined) {
      const { kafes, logariasmoi, supermarket, internet } = mytest;
      const xesemesa = async () => {
        await setChange(prev => {
          return {
            ...prev,
            user,
            kafes,
            logariasmoi,
            supermarket,
            internet,
          };
        });
      };
      xesemesa();
    }
  };
  const dostaOla2 = async () => {
    console.log(change);
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER}/main/${props.match.params.name}`,
        change
      );
    } catch (err) {
      console.log(err);
    }
  };
  const meme = `/main/calc/${user.username}`;
  const yoyo = () => {
    setLastOne(prev => false);
    console.log(user.username, "****");
  };
  if (!lastOne) {
    return <Redirect to={meme} />;
  }
  return (
    <section className="calculate">
      {item ? (
        <div className="ola3">
          <div className="title2" onClick={yoyo}>
            Έξοδα
          </div>
          <div title="a" onClick={calcItem} className="mesa">
            Καφέδες μπούγατσες και λοιπά καθημερινά έξοδα
          </div>
          <div title="b" onClick={calcItem} className="mesa">
            Αγορές σε σούπερ μάρκετ
          </div>
          <div title="c" onClick={calcItem} className="mesa">
            Πληρωμές λογαριασμών ΔΕΗ, τηλέφωνο κτλ
          </div>
          <div title="d" onClick={calcItem} className="mesa">
            Αγορές από το ίντερνετ
          </div>
          <div className="enimerosi">
            <div title="myBal" className="mesa2" onClick={dostaOla}>
              Ενημέρωση
            </div>
            <div title="myBal" className="mesa2" onClick={dostaOla2}>
              Αποθήκευση
            </div>
          </div>
        </div>
      ) : (
        <div className="ola3calc">
          <div className="xoxo">
            <div className="preview">
              <p onClick={calcItem} className="mypreview">
                {newTest}
              </p>
            </div>
            <div title="del" className="preview2 deleteItem" onClick={calcItem}>
              <p className="mypreview2" title="del">
                DELETE
              </p>
            </div>
          </div>
          <div className="nums">
            <table>
              <tbody>
                <tr>
                  <td title="1" onClick={calcItem}>
                    1
                  </td>
                  <td title="2" onClick={calcItem}>
                    2
                  </td>
                  <td title="3" onClick={calcItem}>
                    3
                  </td>
                </tr>
                <tr>
                  <td title="4" onClick={calcItem}>
                    4
                  </td>
                  <td title="5" onClick={calcItem}>
                    5
                  </td>
                  <td title="6" onClick={calcItem}>
                    6
                  </td>
                </tr>
                <tr>
                  <td title="7" onClick={calcItem}>
                    7
                  </td>
                  <td title="8" onClick={calcItem}>
                    8
                  </td>
                  <td title="9" onClick={calcItem}>
                    9
                  </td>
                </tr>
                <tr>
                  <td id="zerow" title="0" onClick={calcItem}>
                    0
                  </td>
                  <td id="dot" title="." onClick={calcItem}>
                    .
                  </td>

                  <td title="add" onClick={calcItem} className="addItem">
                    ADD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
