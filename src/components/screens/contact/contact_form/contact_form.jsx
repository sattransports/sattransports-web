import React from "react"; // React import.
import styles from "./contact_form.module.scss"; // SCSS module for styling.
import CustomInput from "@/components/ui/custom_input/custom_input"; // Custom Input component.
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea"; // Custom TextArea component.
import CustomButton from "@/components/ui/custom_button/custom_button"; // Custom Button component.

// Contact form component for user inquiries.
const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault(); // Prevents the default form submission behavior.
        // Add form submission logic here, e.g., API call to send the form data.
      }}
    >
      {/* Form heading */}
      <h2>Get in Touch</h2>

      {/* Row for first name and last name inputs */}
      <div className={styles.formRow}>
        <CustomInput placeHolder="First Name*" required />
        <CustomInput placeHolder="Last Name*" required />
      </div>

      {/* Row for email input */}
      <div className={styles.formRow}>
        <CustomInput placeHolder="Email*" required type="email" />
      </div>

      {/* Row for mobile number input */}
      <div className={styles.formRow}>
        <CustomInput placeHolder="Mobile Number*" required type="tel" />
      </div>

      {/* Textarea row for message input */}
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

      {/* Submit button */}
      <CustomButton type="submit">Submit</CustomButton>

      {/* Disclaimer message */}
      <p>By submitting, you agree to our terms and conditions.</p>
    </form>
  );
};

export default ContactForm;
