import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./joinsatteam.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const JoinTaxiTeam = () => {
  return (
    <section className={styles.joinTeam}>
      <SectionHeading head="Join the SAT Taxi Team" variant={2} />
      <CustomContainer>
        <div className={styles.container}>
          <div className={styles.joinContent}>
            <div className={styles.joinInfo}>
              <div className={styles.joinIcon}>
                <Image
                  loading="lazy"
                  src=""
                  alt="Join icon"
                  className={styles.iconImage}
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.joinText}>
                <p className={styles.description}>
                  Are you looking for a rewarding career with flexible hours and
                  competitive earnings? Join SAT Taxi as a driver and be part of
                  a dynamic team that's committed to providing exceptional
                  transportation services.
                </p>
                <CustomButton>
                  <Link href="/about">Join Now</Link>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default JoinTaxiTeam;
