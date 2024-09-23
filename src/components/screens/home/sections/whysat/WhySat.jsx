import React, { useState } from "react";
import Image from "next/image";
import styles from "./whysat.module.scss";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import commuteImg from "../../../../../../public/assets/dailyCommute.png";
import eventImg from "../../../../../../public/assets/event.png";
import { Col, Row } from "react-bootstrap";

const WhySat = () => {
  const [counterOn, setCounterOn] = useState(false);

  const stats = [
    {
      value: "99",
      description:
        "safety record, we prioritize passenger and driver well-being",
      isPercentage: true,
    },
    {
      value: "4000000",
      description: "kilometers, serving customers across cities",
      isPercentage: false,
    },
    {
      value: "140",
      description:
        "experienced drivers is committed to providing safe transportation",
      isPercentage: false,
    },
  ];

  return (
    <section className={styles.howItWorksSection}>
      <SectionHeading head="Why SAT" />

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
                  {/* Conditional rendering for % or + */}
                </h2>
                <p>{stat.description}</p>
              </Col>
            ))}
          </Row>
        </ScrollTrigger>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.left} data-aos="fade-right">
              <Image
                src={commuteImg}
                alt="left-img"
                fluid
                width={500}
                height={300}
                className={styles.img}
                data-aos="fade-right"
              />
              <br />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.right} data-aos="fade-left">
              <h2>Daily Office Commute</h2>
              <p>
                Continuing from where we left off: Choice for companies with Pan
                India presence. We are committed to provide quality and reliable
                Employee Transportation services.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.right} data-aos="fade-left">
              <h2>Corporate Events</h2>
              <p>
                Our corporate cab services include an array of cars ranging from
                economy to premium and luxury rides of any time services.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.left} data-aos="fade-right">
              <Image
                src={eventImg}
                alt="left-img"
                fluid
                width={500}
                height={300}
                className={styles.img}
                data-aos="fade-right"
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
