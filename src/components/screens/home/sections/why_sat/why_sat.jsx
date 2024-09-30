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
      description:
        "Impeccable safety record - SAT consistently maintains a 99% safety rating, ensuring that our passengers are always in good hands. We prioritize safety protocols and regularly train our drivers to handle all situations with professionalism and care.",
      isPercentage: true,
    },
    {
      value: "4000000",
      description:
        "Over 4 million kilometers covered - Our extensive experience on the road has allowed us to cover millions of kilometers, providing reliable and efficient transportation services to thousands of clients across various industries.",
      isPercentage: false,
    },
    {
      value: "140",
      description:
        "Team of 140 highly skilled and experienced drivers - Each of our drivers undergoes rigorous training and background checks to ensure they meet SAT’s high standards of safety, reliability, and customer service. This experienced team forms the backbone of our transport solutions.",
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
                comfortable commute to and from work. Our daily office commute
                services are designed to take the stress out of your day,
                offering timely and dependable transportation to ensure you
                start and end your workday on the right note. With a fleet of
                modern, well-maintained vehicles and professional drivers, we
                prioritize punctuality, safety, and comfort. Whether you're an
                individual or a company arranging employee commutes, SAT
                provides customizable solutions to fit your specific needs. Say
                goodbye to traffic worries and parking hassles—let us handle
                your commute.
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
                services that cater to both small and large gatherings. Whether
                it's a conference, business meeting, or a company retreat, our
                fleet is equipped to handle group transportation with ease. We
                ensure that your corporate events run smoothly by offering
                punctual, professional service, and our drivers are trained to
                provide a seamless travel experience for all attendees. We
                understand the need for timeliness, comfort, and professionalism
                in corporate settings, and our vehicles offer the perfect blend
                of luxury and convenience, ensuring your team arrives refreshed
                and ready to excel.
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
