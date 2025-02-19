import React from "react";
import styles from "./AIServiceCard.module.css";
import { FaChartBar, FaTools, FaBullhorn, FaLaptopCode, FaDatabase, FaRobot } from "react-icons/fa";
import Link from "next/link"; // Import Link from Next.js

const AIServiceCard: React.FC = () => {
  return (
    <div className={styles.serviceContainer}>
      {/* Left Section: Text */}
      <div className={styles.textSection}>
        <h3 className={styles.sectionTitle}>OUR AI SERVICES</h3>
        <h2 className={styles.sectionSubtitle}>
          Redefine the way you do business with{" "}
          <span className={styles.highlight}>Zenoheal Solutions</span>
        </h2>
        <p className={styles.sectionDescription}>
          Our purpose is to deliver excellence in service and execution.
        </p>
        <button className={styles.learnMoreButton}>
          LEARN MORE <span className={styles.arrow}>→</span>
        </button>
      </div>

      {/* Right Section: Cards */}
      <div className={styles.cardsSection}>
        {/* Card 1: Digital Transformation */}
        <div className="styles.cards">
        <Link href="/digitalTransformation">
          <div className={styles.card}>
            <FaChartBar className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Digital Transformation</h3>
            <p className={styles.cardDescription}>
              Transform your business digitally for a competitive edge in the market.
            </p>
        </div>

        </Link>
        </div>
        {/* Card 2: Enterprise Solutions */}
        <div className="styles.cards">
        <Link href="/enterpriseSolutions">
          <div className={styles.card}>
            <FaTools className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Enterprise Solutions</h3>
            <p className={styles.cardDescription}>
              Streamline your business operations with tailored enterprise solutions.
            </p>
          </div>
        </Link>
        </div>

        {/* Card 3: Digital Marketing */}
        <div className="styles.cards">
        <Link href="/digitalMarketing">
          <div className={styles.card}>
            <FaBullhorn className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Digital Marketing</h3>
            <p className={styles.cardDescription}>
              Enhance your brand visibility and reach through digital marketing strategies.
            </p>
          </div>
         
        </Link>
        </div>

        {/* Card 4: AI Development */}

        <div className="styles.cards">
        <Link href="/aiDevelopment">
          <div className={styles.card}>
            <FaLaptopCode className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>AI Development</h3>
            <p className={styles.cardDescription}>
              Build AI-powered applications for smarter business operations.
            </p>
          </div>
        </Link>
        </div>

        {/* Card 5: Data Analytics */}
        <div className="styles.cards">
        <Link href="/dataAnalytics">
          <div className={styles.card}>
            <FaDatabase className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Data Analytics</h3>
            <p className={styles.cardDescription}>
              Gain valuable insights from your data with advanced analytics solutions.
            </p>
          </div>
        </Link>
        </div>

        {/* Card 6: Automation Solutions */}
        <div className="styles.cards">
        <Link href="/automationSolutions">
          <div className={styles.card}>
            <FaRobot className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Automation Solutions</h3>
            <p className={styles.cardDescription}>
              Automate repetitive tasks to improve efficiency and productivity.
            </p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default AIServiceCard;
