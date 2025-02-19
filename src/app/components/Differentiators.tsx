import React from "react";
import styles from "./Differentiators.module.css";
import { FaChartBar } from "react-icons/fa";

const Differentiators: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Differentiators</h2>
      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartBar className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>High Skilled Workforce</h3>
          <p className={styles.cardDescription}>
            75+ Man-years experience in Technology in various geographies
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartBar className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Intellectual Property</h3>
          <p className={styles.cardDescription}>
            Access to proprietary technology & Value Chain
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartBar className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Data Driven Development</h3>
          <p className={styles.cardDescription}>
            75+ Man-years experience in Technology in various geographies
          </p>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartBar className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>High Skilled Workforce</h3>
          <p className={styles.cardDescription}>
            75+ Man-years experience in Technology in various geographies
          </p>
        </div>

        {/* Card 5 */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartBar className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Intellectual Property</h3>
          <p className={styles.cardDescription}>
            Access to proprietary technology & Value Chain
          </p>
        </div>

        {/* Card 6 */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartBar className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Data Driven Development</h3>
          <p className={styles.cardDescription}>
            75+ Man-years experience in Technology in various geographies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
