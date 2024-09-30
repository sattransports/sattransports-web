import React from "react"; // React import is necessary for JSX.
import Link from "next/link"; // Next.js Link component for navigation.
import styles from "./footer.module.scss"; // SCSS module import for scoped styles.
import { Col, Image, Row } from "react-bootstrap"; // Bootstrap components.
import { EnvelopeAtFill, PhoneFill, PinMapFill } from "react-bootstrap-icons"; // Bootstrap icons used in the contact list.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.

const CONTACTS = [
  {
    id: "t1",
    name: "831-9929-86700",
    element: <PhoneFill />, // Phone icon for contact number.
  },
  {
    id: "t2",
    name: "contact@domain.com",
    element: <EnvelopeAtFill />, // Email icon for contact email.
  },
  {
    id: "t3",
    name: "Jl. Raya Sesetan No.210, Sesetan, Denpasar, Bali",
    element: <PinMapFill />, // Pin icon for address.
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Current year dynamically.
  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <Row className={styles.row}>
          <Col xs={12} className={styles.centerContent}>
            <Image src="/whitelogo.png" alt="logo" width={180} />{" "}
            {/* Company logo */}
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
              <div key={contact.id} className={styles.contactItem}>
                {" "}
                {/* Corrected key prop to use `contact.id` */}
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
