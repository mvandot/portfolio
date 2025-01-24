import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about","aboutImage.png")}
          alt="This is me on a vacation"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about","cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>HTML & CSS</h3>
              <p>Static Websites</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about","serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>JS</h3>
              <p>Using React Library</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about","uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Web & Mobile Development</h3>
              <p>Native React</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
