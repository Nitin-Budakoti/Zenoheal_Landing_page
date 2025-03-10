import styles from './First.module.css';

const First = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.step}>STEP 1</p>
        <h1 className={styles.title}>
          Redefine the way you do business with Zenoheal Solutions
        </h1>
      </div>
      <div className={styles.box}></div>
    </div>
  );
};

export default First;
