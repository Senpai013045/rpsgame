import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.gameTitle}>Rock Paper Scissors</div>
      <div className={styles.scoreBox}>
        <p className={styles.scoreTitle}>Score</p>
        <p className={styles.score}>12</p>
      </div>
    </div>
  );
};

export default Header;
