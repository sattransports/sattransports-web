import React from "react";
import styles from "./vehicle_form.module.scss";

function VehicleAttachmentForm() {
  return (
    <form className={styles.form}>
      <h3>Attach Your Vehicle Today</h3>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Driver/Owner Name"
          aria-label="Driver/Owner Name"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          aria-label="Contact Number"
        />
      </div>
      <div className={styles.formGroup}>
        <input type="email" placeholder="Email" aria-label="Email" />
        <input
          type="text"
          placeholder="Present City"
          aria-label="Present City"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Vehicle Name"
          aria-label="Vehicle Name"
        />
        <input
          type="text"
          placeholder="Vehicle Type"
          aria-label="Vehicle Type"
        />
      </div>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Fuel Type" aria-label="Fuel Type" />
        <input
          type="text"
          placeholder="Registration Number"
          aria-label="Registration Number"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="date"
          placeholder="Registration Date"
          aria-label="Registration Date"
        />
        <input
          type="file"
          placeholder="Registration Certificate (RC)"
          aria-label="Registration Certificate (RC)"
        />
      </div>
      <div className={styles.submitSection}>
        <button type="submit">Submit</button>
        <p>By submitting, you agree to our terms and conditions.</p>
      </div>
    </form>
  );
}

export default VehicleAttachmentForm;
