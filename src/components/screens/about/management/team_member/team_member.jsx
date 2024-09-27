import React from "react";
import styles from "./team_member.module.scss";

const TeamMember = ({ name, position, description, imageSrc, reverse }) => {
  return (
    <div className={`${styles.teamMember} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>{name}</h3>
          <p className={styles.position}>{position}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={imageSrc}
            alt={`${name} - ${position}`}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
