import React, { useState } from "react";
import styles from "./howwework.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const HowWeWork = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <section className={styles.aboutSection}>
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <div className={styles.left} data-aos="fade-right">
              <h2 className={styles.hr} data-aos="fade-up">
                How We Work
              </h2>
              <hr />
              <p>
                As a leading global employee transportation and logistics
                company, we specialize in creating tailored travel experiences.
                Our team is dedicated to providing exceptional service that
                exceeds your expectations. Whether you're a corporate client,
                individual traveler, or part of a group, we offer customized
                itineraries that showcase India's rich heritage and cultural
                diversity.
              </p>
              <br />
              <p>
                Our commitment to excellence has led us to partner with some of
                the world's most respected corporations. This collaboration not
                only validates our expertise but also ensures that we
                consistently deliver the highest quality travel solutions to
                every client.
              </p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className={styles.img} data-aos="fade-left">
              <Image src="/logo.png" alt="auto" fluid />
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default HowWeWork;
