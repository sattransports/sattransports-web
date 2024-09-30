import React from "react"; // React import.
import styles from "./management.module.scss"; // SCSS module for styling.
import { teamMembers } from "@/constants/contact"; // Team member data from constants.

// Component for rendering the management team section.
const ManagementTeam = () => {
  return (
    <section className={styles.managementTeam}>
      <div className={styles.innerContainer}>
        <div className={styles.teamHeader}>
          <h2>Management Team</h2>
          <div className={styles.divider}>--------------------------</div>
        </div>
        <p className={styles.subtitle}>Meet the leaders behind SAT Travels</p>

        {/* Loop through team members and render their information */}
        {teamMembers.map((member, index) => (
          <div
            key={index} // Using index for key, better to use a unique ID if available.
            className={`${styles.teamMember} ${
              member.reverse ? styles.reverse : ""
            }`}
          >
            <div
              className={styles.imageContainer}
              data-aos={member.reverse ? "fade-left" : "fade-right"} // Animation based on the 'reverse' flag.
            >
              <img
                src={member.imageSrc}
                alt={`${member.name} - ${member.position}`} // Alt text for accessibility.
                className={styles.image}
                data-aos="zoom-in"
              />
            </div>
            <div
              className={styles.textContainer}
              data-aos={member.reverse ? "fade-right" : "fade-left"}
            >
              <h3>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
              <p className={styles.description}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementTeam;
