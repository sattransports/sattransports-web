import React from "react";
import styles from "./clients.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

function ClientSection() {
  return (
    <section className={styles.clientSection}>
      <CustomContainer>
        <div className={styles.textContainer}>
          <SectionHeading head="Our Valued Clients" />
          <p className={styles.description}>
            At SAT Travels, we are proud to collaborate with a diverse range of
            clients from across the globe. Our partnerships span various
            industries, from startups to well-established global enterprises,
            all sharing a common goal: to achieve success through innovative
            travel and logistics solutions.
            <br />
            Below is a showcase of some of the incredible companies we've had
            the privilege of working with. Each of these logos represents a
            unique story of collaboration, trust, and exceptional results.
          </p>
        </div>
        <h2 className={styles.subHeading}>Our Clients Include:</h2>
        <div className={styles.logoContainer}>
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e70d783965b8b7029aa671af4725871231da39fff224a048b57543adf34e9d2a?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/43dc5034eaf63b2587733d2d71f3f15ab785ab902850c2adb2bffaa6e0f842d9?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/0ed7b1ebe792bc22add2ee247c7926c155e579f8fed112faabd607cdbb77ccd2?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
          ].map((src, index) => (
            <ClientLogo key={index} src={src} />
          ))}
        </div>
        <div className={styles.footerText}>
          <h2>Join Us on the Journey</h2>
          <p>
            We're always eager to form new partnerships with companies that
            value efficiency, reliability, and innovation in travel management.
            If you're looking for a team that's dedicated to delivering top-tier
            travel solutions, let's work together to make your journey a
            success.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
}

function ClientLogo({ src }) {
  return (
    <div className={styles.clientLogo}>
      <img loading="lazy" src={src} alt="Client logo" />
    </div>
  );
}

export default ClientSection;
