import React, { useState } from "react";
import styles from "./contact_form.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    formType: 'contact',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2>Get in Touch</h2>
      <div className={styles.formRow}>
        <CustomInput
          placeHolder="First Name*"
          required
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <CustomInput
          placeHolder="Last Name*"
          required
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formRow}>
        <CustomInput
          placeHolder="Email*"
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formRow}>
        <CustomInput
          placeHolder="Mobile Number*"
          required
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="message">How can we help you?</label>
      <CustomTextArea
        id="message"
        placeholder="Your Message"
        aria-label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <p>By submitting, you agree to our terms and conditions.</p>
    </form>
  );
};

export default ContactForm;
