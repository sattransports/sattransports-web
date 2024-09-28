import React from "react";
import styles from "./contact_form.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Get in Touch</h2>

      {/* First Name and Last Name */}
      <div className={styles.formRow}>
        <CustomInput placeHolder="First Name*" required />
        <CustomInput placeHolder="Last Name*" required />
      </div>

      {/* Email */}
      <div className={styles.formRow}>
        <CustomInput placeHolder="Email*" required type="email" />
      </div>

      {/* Mobile Number */}
      <div className={styles.formRow}>
        <CustomInput placeHolder="Mobile Number*" required type="tel" />
      </div>

      {/* Label and TextArea in one line */}
      <div className={styles.formRowInline}>
        <label htmlFor="message" className={styles.formLabel}>
          How can we help you?
        </label>
        <CustomTextArea
          id="message"
          placeHolder="Your Message*"
          rows={4}
          required
        />
      </div>

      {/* Submit Button */}
      <CustomButton type="submit">Submit</CustomButton>

      {/* Terms & Conditions */}
      <p>By submitting, you agree to our terms and conditions.</p>
    </form>
  );
};

export default ContactForm;
