import React, { useState } from "react"; // React import.
import styles from "./contact_form.module.scss"; // SCSS module for styling.
import CustomInput from "@/components/ui/custom_input/custom_input"; // Custom Input component.
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea"; // Custom TextArea component.
import CustomButton from "@/components/ui/custom_button/custom_button"; // Custom button component.
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    formType: "contact",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle input changes to update form state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission and call the API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    });

    if (response.ok) {
      // Display success toast notification
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000, // Display the toast for 5 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset the form fields back to their initial values
      setFormData({
        formType: "contact",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } else {
      // Display error toast notification
      toast.error("Failed to send message.", {
        position: "top-right",
        autoClose: 5000, // Display the toast for 5 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      {/* ToastContainer is required to show the notifications */}
      <ToastContainer />

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2>Get in Touch</h2>

        {/* Row for first name and last name inputs */}
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

        {/* Row for email input */}
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

        {/* Row for mobile number input */}
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

        {/* Textarea row for message input */}
        <div className={styles.formRowInline}>
          <label htmlFor="message">How can we help you?</label>
          <CustomTextArea
            id="message"
            placeholder="Your Message*"
            aria-label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit button */}
        <CustomButton type="submit" className={styles.submitButton}>
          Submit
        </CustomButton>

        {/* Disclaimer message */}
        <p>By submitting, you agree to our terms and conditions.</p>
      </form>
    </>
  );
};

export default ContactForm;
