import React from "react"; // React import.
import { Col, Image, Row } from "react-bootstrap"; // Bootstrap components for layout and images.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import styles from "./how_we_work.module.scss"; // SCSS module for styling.

// HowWeWork component that describes the company's operations.
const HowWeWork = () => {
  return (
    <section className={styles.aboutSection}>
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <div className={styles.left} data-aos="fade-right">
              <h2 className={styles.hr} data-aos="fade-up">
                Behind the Wheel: SAT’s Operational Excellence
              </h2>
              <hr />
              <p>
                At SAT - ShreeAnnamalaiyar Travels, we are dedicated to
                delivering reliable and efficient transportation services,
                tailored to meet the dynamic needs of the IT industry.
              </p>
              <br />
              <p>
                Our 75+ diverse fleet of vehicles, ranging from sedans to SUVs,
                ensures that we can accommodate various transportation
                requirements, whether it’s a small team or a larger group.
              </p>
              <br />
              <p>
                We employ a team of 75+ dedicated drivers trained to uphold the
                highest standards of customer service. Our commitment to
                punctuality and professionalism ensures 24/7 availability.
              </p>
              <br />
              <p>
                We continuously update our fleet and systems to align with
                modern needs, while maintaining strong safety protocols.
              </p>
              <br />
              <p>
                At SAT, we understand the importance of timeliness in the IT
                industry, and we work tirelessly to ensure every ride is
                reliable.
              </p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className={styles.img} data-aos="fade-left">
              <Image
                src="assets/home/homeherosection.png"
                alt="SAT Logo"
                fluid
              />{" "}
              {/* Company logo */}
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default HowWeWork;
