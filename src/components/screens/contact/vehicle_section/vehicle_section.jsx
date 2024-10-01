import React, { useState } from "react"; // React import.
import styles from "./vehicle_section.module.scss"; // SCSS module for styling.
import CustomInput from "@/components/ui/custom_input/custom_input"; // Custom input component.
import CustomButton from "@/components/ui/custom_button/custom_button"; // Custom button component.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.
import { ToastContainer, toast } from "react-toastify"; // Import Toastify for notifications.
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS.

const VehicleAttachmentSection = () => {
  // State to manage vehicle form data
  const [formData, setFormData] = useState({
    formType: "vehicleAttachment",
    name: "",
    contact: "",
    email: "",
    city: "",
    vehicleName: "",
    vehicleType: "",
    fuelType: "",
    registrationNumber: "",
    registrationDate: "",
    passengerCapacity: "",
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
      toast.success("Vehicle attached successfully!", {
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
        formType: "vehicleAttachment",
        name: "",
        contact: "",
        email: "",
        city: "",
        vehicleName: "",
        vehicleType: "",
        fuelType: "",
        registrationNumber: "",
        registrationDate: "",
        passengerCapacity: "",
      });
    } else {
      // Display error toast notification
      toast.error("Failed to attach vehicle.", {
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

      <section className={styles.vehicleAttachmentSection}>
        <SectionHeading head="Attach Your Vehicle to SAT Travels" />
        <p>
          Do you own a vehicle and want to make the most of it? Join SAT Travels
          and become a part of our trusted network of vehicles that deliver
          premium travel services. Whether you own a car, van, or bus, we are
          looking for reliable partners to help us serve our growing clientele.
        </p>

        {/* Form starts here */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Attach Your Vehicle Today</h3>

          {/* Group of input fields */}
          <div className={styles.formGroup}>
            <CustomInput
              type="text"
              placeHolder="Driver/Owner Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Driver/Owner Name"
              required
            />
            <CustomInput
              type="tel"
              placeHolder="Contact Number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              aria-label="Contact Number"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <CustomInput
              type="email"
              placeHolder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
              required
            />
            <CustomInput
              type="text"
              placeHolder="Present City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              aria-label="Present City"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <CustomInput
              type="text"
              placeHolder="Vehicle Name"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              aria-label="Vehicle Name"
              required
            />
            <CustomInput
              type="text"
              placeHolder="Vehicle Type"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              aria-label="Vehicle Type"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <CustomInput
              type="text"
              placeHolder="Fuel Type"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              aria-label="Fuel Type"
              required
            />
            <CustomInput
              type="text"
              placeHolder="Registration Number"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              aria-label="Registration Number"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <CustomInput
              type="text"
              placeHolder="Registration Date"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
              aria-label="Registration Date"
              required
            />
            <CustomInput
              type="text"
              placeHolder="Passenger Capacity"
              name="passengerCapacity"
              value={formData.passengerCapacity}
              onChange={handleChange}
              aria-label="Passenger Capacity"
              required
            />
          </div>

          {/* Submit button */}
          <div className={styles.submitSection}>
            <CustomButton type="submit">Submit</CustomButton>
            <p>By submitting, you agree to our terms and conditions.</p>
          </div>
        </form>
      </section>
    </>
  );
};

export default VehicleAttachmentSection;
