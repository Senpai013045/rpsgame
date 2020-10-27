import React from "react";
import styles from "./gamearea.module.css";
import triangle from "../../images/bg-triangle.svg";
import Option from "./options/option";

const Gamearea = (props) => {
  return (
    <div className={styles.gameArea}>
      <img src={triangle} alt="triangle" className={styles.triangle} />
      <div className={styles.options}>
        <Option option="paper" needsPos={true} />
        <Option option="scissors" needsPos={true} />
        <Option option="rock" needsPos={true} />
      </div>
    </div>
  );
};

export default Gamearea;
