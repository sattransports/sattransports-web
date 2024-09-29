import React, { useState } from "react"; // React and hooks.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import ScrollTrigger from "react-scroll-trigger"; // Scroll-trigger for animations.
import CountUp from "react-countup"; // Counter component.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import { Col, Row } from "react-bootstrap"; // Bootstrap grid system.
import styles from "./why_sat.module.scss"; // SCSS module for styling.

// WhySat component that displays company stats and services.
const WhySat = () => {
  const [counterOn, setCounterOn] = useState(false); // Counter state.

  const stats = [
    {
      value: "99",
      description: "Impeccable safety record...",
      isPercentage: true,
    },
    {
      value: "4000000",
      description: "Extensive kilometers covered...",
      isPercentage: false,
    },
    {
      value: "140",
      description: "Highly skilled and experienced drivers...",
      isPercentage: false,
    },
  ];

  return (
    <section className={styles.howItWorksSection}>
      <SectionHeading head="Why SAT" /> {/* Section heading */}
      <CustomContainer>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Row className={styles.statsRow}>
            {stats.map((stat, index) => (
              <Col xs={12} md={4} key={index} className={styles.stat}>
                <h2>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      delay={0}
                    />
                  )}
                  {stat.isPercentage ? "%" : "+"}{" "}
                  {/* Percentage or Plus sign */}
                </h2>
                <p>{stat.description}</p> {/* Stat description */}
              </Col>
            ))}
          </Row>
        </ScrollTrigger>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.left} data-aos="fade-right">
              <Image
                src="/assets/home/dailyCommute.png"
                alt="Daily commute"
                fluid
              />
              <br />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.right} data-aos="fade-left">
              <h2>Daily Office Commute</h2>
              <p>
                At SAT, we understand the importance of a reliable and
                comfortable commute...
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.right} data-aos="fade-left">
              <h2>Corporate Events</h2>
              <p>
                For corporate events, SAT provides premium transportation
                services...
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.left} data-aos="fade-right">
              <Image
                src="/assets/home/event.png"
                alt="Corporate events"
                fluid
              />
              <br />
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default WhySat;
