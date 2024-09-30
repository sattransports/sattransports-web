import React from "react"; // React import.
import styles from "./contact.module.scss"; // SCSS module for styling.
import ContactForm from "./contact_form/contact_form"; // Contact form component.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import { EnvelopeAtFill, PhoneFill } from "react-bootstrap-icons"; // Bootstrap icons for email and phone.
import LocationSection from "./location/location"; // Location section component.
import VehicleAttachmentSection from "./vehicle_section/vehicle_section"; // Vehicle attachment section component.

// Main Contact Screen component.
const ContactScreen = () => {
  return (
    <main className={styles.contactSection}>
      <CustomContainer>
        <div className={styles.contactContent}>
          {/* Left side: Contact details and extra info */}
          <div className={styles.contactDetails}>
            <div className={styles.contactHeading}>
              <h2>Contact Us</h2>
              <p>
                We're here to answer any questions you may have.
                <br />
                Reach out to us, and we'll respond as soon as we can.
              </p>
            </div>

            {/* Contact Info Section with phone and email */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <PhoneFill /> {/* Phone icon */}
                <span>831-9929-86700</span> {/* Phone number */}
              </div>
              <div className={styles.contactItem}>
                <EnvelopeAtFill /> {/* Email icon */}
                <span>contact@domain.com</span> {/* Email address */}
              </div>
            </div>

            {/* Additional Info Blocks */}
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

          {/* Right side: Contact form */}
          <div className={styles.formContainer}>
            <ContactForm /> {/* Contact form component */}
          </div>
        </div>

        {/* Location and Vehicle Attachment sections */}
        <LocationSection />
        <VehicleAttachmentSection />
      </CustomContainer>
    </main>
  );
};

export default ContactScreen;
