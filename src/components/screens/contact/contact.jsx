import React from "react";
import styles from "./contact.module.scss";
import ContactForm from "./contact_form/contact_form";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { EnvelopeAtFill, PhoneFill, PinMapFill } from "react-bootstrap-icons";
import LocationSection from "./location/location";
import VehicleAttachmentSection from "./vehicle_section/vehicle_section";

const ContactScreen = () => {
  return (
    <main className={styles.contactSection}>
      <CustomContainer>
        <div className={styles.contactContent}>
          <div className={styles.contactDetails}>
            <div className={styles.contactHeading}>
              <h2>Contact Us</h2>
              <p>
                We're here to answer any questions you may have.
                <br />
                Reach out to us, and we'll respond as soon as we can.
              </p>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <PhoneFill />
                <span>831-9929-86700</span>
              </div>
              <div className={styles.contactItem}>
                <EnvelopeAtFill />
                <span>contact@domain.com</span>
              </div>
            </div>
            <div className={styles.extraInfo}>
              <div className={styles.infoBlock}>
                <h3>Customer Support</h3>
                <p>
                  Need assistance with your booking or have a question about our
                  services? Our support team is here to help you every step of
                  the way.
                </p>
              </div>
              <div className={styles.infoBlock}>
                <h3>Feedback & Suggestions</h3>
                <p>
                  Your feedback is valuable to us. Share your experience or
                  suggestions to help us improve our services and better meet
                  your needs.
                </p>
              </div>
              <div className={styles.infoBlock}>
                <h3>Inquiries</h3>
                <p>
                  Have a question or looking for more information? Get in touch
                  with us for any inquiries about our travel packages or
                  corporate services.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
        <LocationSection />
        <VehicleAttachmentSection />
      </CustomContainer>
    </main>
  );
};

export default ContactScreen;
