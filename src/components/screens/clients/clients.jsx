import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./clients.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const ClientSection = () => {
  const clientLogos = [
    "/assets/clients/Atos logo copy.png",
    "/assets/clients/boa logo copy.png",
    "/assets/clients/color-logo.png",
    "/assets/clients/logo-2048x486.png",
    "/assets/clients/Gw logo.png",
    "/assets/clients/hcl clr logo.png",
    "/assets/clients/flex logo.png",
    "/assets/clients/Raido final logo.png",
    "/assets/clients/TCS_NewLogo_Final_RGB.png",
    "/assets/clients/tp-main-logo-svg.png",
    "/assets/clients/tech-mahindra.png",
    "/assets/clients/mml.png",
  ];

  return (
    <CustomContainer>
      <section className={styles.clientSection}>
        <SectionHeading head="Our Valued Clients" />
        <div className={styles.introText}>
          <p>
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

        <div className={styles.clientsGrid}>
          {clientLogos.map((src, index) => (
            <div
              key={index}
              className={styles.clientLogo}
              data-aos="slide-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className={styles.logoContainer}>
                <div className={styles.logoItem}>
                  <Image
                    loading="lazy"
                    src={src}
                    alt={`Client logo ${index + 1}`}
                    className={styles.logoImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <SectionHeading head="Join Us on the Journey" />
          <p>
            We're always eager to form new partnerships with companies that
            value efficiency, reliability, and innovation in travel management.
            If you're looking for a team that's dedicated to delivering top-tier
            travel solutions, let's work together to make your journey a
            success.
          </p>
        </div>
      </section>
    </CustomContainer>
  );
};

export default ClientSection;
