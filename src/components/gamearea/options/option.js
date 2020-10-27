import React from "react";
import styles from "./option.module.css";
import paper from "../../../images/icon-paper.svg";
import rock from "../../../images/icon-rock.svg";
import scissors from "../../../images/icon-scissors.svg";

const Option = (props) => {
  let requested = props.option;
  let classes = [styles.option];
  let imgsrc = "";
  switch (requested) {
    case "paper":
      classes.push(styles.paper);
      imgsrc = paper;
      if (props.needsPos) {
        classes.push(styles.paperPos);
      }
      break;
    case "scissors":
      classes.push(styles.scissors);
      imgsrc = scissors;
      if (props.needsPos) {
        classes.push(styles.scissorsPos);
      }
      break;
    case "rock":
      classes.push(styles.rock);
      imgsrc = rock;
      if (props.needsPos) {
        classes.push(styles.rockPos);
      }
      break;
    default:
      return;
  }
  return (
    <div className={classes.join(" ")}>
      <img src={imgsrc} alt="" />
    </div>
  );
};

export default Option;
