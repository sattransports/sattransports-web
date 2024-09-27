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
        <SectionHeading data="Our Clients Include:" variant={2} />
        <div className={styles.logoContainer}>
          {[
            "/assets/clients/Gw logo.png",
            "/assets/clients/color-logo.png",
            "/assets/clients/hcl clr logo.png",
            "/assets/clients/Atos logo copy.png",
            "/assets/clients/boa logo copy.png",
            "/assets/clients/logo-2048x486.png",
            "/assets/clients/Raido final logo.png",
            "/assets/clients/TCS_NewLogo_Final_RGB.png",
            "/assets/clients/tp-main-logo-svg.png",
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
