import React from "react";
import styles from "./modal.module.css";
import rules from "../../images/image-rules.svg";

const Modal = (props) => {
  const classes = [styles.backdrop];
  if (props.show) {
    classes.push(styles.show);
  }
  return (
    <div className={classes.join(" ")}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h4>Rules</h4>
          <div className={styles.close} onClick={props.hideModalHandler}>
            &times;
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <img src={rules} alt="rules" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
