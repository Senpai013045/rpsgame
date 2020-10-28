import React, { useEffect, useState } from "react";
import styles from "./resultarea.module.css";
import Option from "../gamearea/options/option";
import { withRouter } from "react-router-dom";
import didUserWin from "../logic/logic";
const ResultArea = (props) => {
  const [picking, setPicking] = useState(false);
  const [winStatus, setWinStatus] = useState("");
  const playAgainHandler = () => {
    props.history.push("/");
  };
  const [houseChoice, setHouseChoice] = useState(null);
  useEffect(() => {
    let arr = ["rock", "scissors", "paper"];
    let random = arr.sort((a, b) => 0.5 - Math.random())[0];
    if (!props.location.selected) {
      setHouseChoice("");
    } else {
      setHouseChoice("");
      setPicking(true);
      setTimeout(() => {
        setHouseChoice(random);
        setPicking(false);
        let status = didUserWin(props.location.selected, random);
        setWinStatus(status);
      }, 1500);
    }
  }, [props.location.selected]);

  useEffect(() => {
    if (winStatus === "you win") {
      props.scoreHandler(1);
    }
    if (winStatus === "you lose") {
      props.scoreHandler(-1);
    }
    // eslint-disable-next-line
  }, [winStatus]);

  return (
    <>
      <div className={styles.resultArea}>
        <div className={styles.user}>
          <Option
            option={props.location.selected}
            blink={winStatus === "you win"}
          />
          <p className={styles.caption}>You picked</p>
        </div>
        <div className={styles.house}>
          {picking && "Picking..."}
          <Option option={houseChoice} blink={winStatus === "you lose"} />
          <p className={styles.caption}>The house picked</p>
        </div>
      </div>
      <div className={styles.returnMenu}>
        <h3>{winStatus}</h3>
        <button onClick={playAgainHandler}>Play again</button>
      </div>
    </>
  );
};

export default withRouter(ResultArea);
