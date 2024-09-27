import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import { EnvelopeAtFill, PhoneFill, PinMapFill } from "react-bootstrap-icons";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const CONTACTS = [
  {
    id: "t1",
    name: "831-9929-86700",
    element: <PhoneFill />,
  },
  {
    id: "t2",
    name: "contact@domain.com",
    element: <EnvelopeAtFill />,
  },
  {
    id: "t3",
    name: "Jl. Raya Sesetan No.210, Sesetan, Denpasar, Bali",
    element: <PinMapFill />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <Row className={styles.row}>
          <Col xs={12} className={styles.centerContent}>
            <Image src="/whitelogo.png" alt="logo" width={180} />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={12} className={styles.centerContent}>
            <p>
              Your trusted partner for reliable transportation solutions. We
              specialize in employee transportation services, corporate shuttle
              services, and taxi services.
            </p>
          </Col>
        </Row>

        <Row className={styles.centerContent}>
          <Col xs={12}>
            {CONTACTS.map((contact, i) => (
              <div key={contact.name} className={styles.contactItem}>
                {contact.element} {contact.name}
              </div>
            ))}
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={12} className={styles.centerContent}>
            <small>
              ©® <Link href="/">Sree Annamalaiyar Transports</Link>{" "}
              {currentYear} All rights reserved by Logistics Limited
            </small>
          </Col>
        </Row>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
