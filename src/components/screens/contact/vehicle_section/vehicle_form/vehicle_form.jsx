import React from "react";
import styles from "./vehicle_form.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";

function VehicleAttachmentForm() {
  return (
    <form className={styles.form}>
      <h3>Attach Your Vehicle Today</h3>
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
      <div className={styles.submitSection}>
        <CustomButton>Submit</CustomButton>
        <p>By submitting, you agree to our terms and conditions.</p>
      </div>
    </form>
  );
}

export default VehicleAttachmentForm;
