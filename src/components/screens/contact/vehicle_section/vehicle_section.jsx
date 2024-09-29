import React from "react"; // React import.
import styles from "./vehicle_section.module.scss"; // SCSS module for styling.
import CustomInput from "@/components/ui/custom_input/custom_input"; // Custom input component.
import CustomButton from "@/components/ui/custom_button/custom_button"; // Custom button component.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.

// Form component for vehicle attachment.
function VehicleAttachmentForm() {
  return (
    <form className={styles.form}>
      <h3>Attach Your Vehicle Today</h3>

      {/* Group of input fields */}
      <div className={styles.formGroup}>
        <CustomInput
          type="text"
          placeHolder="Driver/Owner Name"
          aria-label="Driver/Owner Name"
          required
        />
        <CustomInput
          type="tel"
          placeHolder="Contact Number"
          aria-label="Contact Number"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <CustomInput
          type="email"
          placeHolder="Email"
          aria-label="Email"
          required
        />
        <CustomInput
          type="text"
          placeHolder="Present City"
          aria-label="Present City"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <CustomInput
          type="text"
          placeHolder="Vehicle Name"
          aria-label="Vehicle Name"
          required
        />
        <CustomInput
          type="text"
          placeHolder="Vehicle Type"
          aria-label="Vehicle Type"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <CustomInput
          type="text"
          placeHolder="Fuel Type"
          aria-label="Fuel Type"
          required
        />
        <CustomInput
          type="text"
          placeHolder="Registration Number"
          aria-label="Registration Number"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <CustomInput
          type="text"
          placeHolder="Registration Date"
          aria-label="Registration Date"
          required
        />
        <CustomInput
          type="text"
          placeHolder="Passenger Capacity"
          aria-label="Passenger Capacity"
          required
        />
      </div>

      {/* Submit button */}
      <div className={styles.submitSection}>
        <CustomButton>Submit</CustomButton>
        <p>By submitting, you agree to our terms and conditions.</p>
      </div>
    </form>
  );
}

// Main section component that includes the form.
function VehicleAttachmentSection() {
  return (
    <section className={styles.vehicleAttachmentSection}>
      <SectionHeading head="Attach Your Vehicle to SAT Travels" />
      <p>
        Do you own a vehicle and want to make the most of it? Join SAT Travels
        and become a part of our trusted network of vehicles that deliver
        premium travel services. Whether you own a car, van, or bus, we are
        looking for reliable partners to help us serve our growing clientele.
      </p>
      <VehicleAttachmentForm />
    </section>
  );
}

export default VehicleAttachmentSection;
