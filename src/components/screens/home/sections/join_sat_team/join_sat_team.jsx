import React from "react"; // React import.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import Link from "next/link"; // Next.js Link for routing.
import styles from "./join_sat_team.module.scss"; // SCSS module for styling.
import CustomButton from "@/components/ui/custom_button/custom_button"; // Custom button component.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.

// JoinSatTeam component for displaying recruitment information.
const JoinSatTeam = () => {
  return (
    <section className={styles.joinTeam}>
      <SectionHeading head="Join the SAT Taxi Team" variant={2} />{" "}
      {/* Heading */}
      <CustomContainer>
        <div className={styles.container}>
          <div className={styles.joinContent}>
            <div className={styles.joinInfo}>
              <div className={styles.joinIcon}>
                <Image
                  loading="lazy"
                  src="/assets/home/mail.svg"
                  alt="Join icon" // Alt text for accessibility.
                  className={styles.iconImage}
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.joinText}>
                <p className={styles.description}>
                  Are you seeking a fulfilling career with flexible hours and
                  competitive pay? Become a driver at SAT - ShreeAnnamalaiyar
                  Travels and join a dedicated team focused on delivering
                  outstanding transportation services.
                </p>
                <CustomButton>
                  <Link href="/contact">Join Now</Link>{" "}
                  {/* Link to the contact page */}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default JoinSatTeam;
