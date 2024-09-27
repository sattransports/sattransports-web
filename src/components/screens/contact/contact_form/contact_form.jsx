import React from "react";
import styles from "./contact_form.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <h2>Get in Touch</h2>
      <div className={styles.formRow}>
        <CustomInput placeHolder="First Name*" required />
        <CustomInput placeHolder="Last Name*" required />
      </div>
      <div className={styles.formRow}>
        <CustomInput placeHolder="Email*" required type="email" />
      </div>
      <div className={styles.formRow}>
        {/* <select aria-label="Country Code">
          <option>+91</option>
        </select> */}
        <CustomInput placeHolder="Mobile Number*" required type="tel" />
      </div>
      <label htmlFor="message">How can we help you?</label>
      <CustomTextArea
        id="message"
        placeholder="Your Message"
        aria-label="Message"
      ></CustomTextArea>
      <button type="submit">Submit</button>
      <p>By submitting, you agree to our terms and conditions.</p>
    </form>
  );
};

export default ContactForm;
