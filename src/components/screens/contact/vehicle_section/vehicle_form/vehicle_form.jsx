import React, { useState } from "react";
import styles from "./vehicle_form.module.scss";

function VehicleAttachmentForm() {
  const [formData, setFormData] = useState({
    formType: 'vehicleAttachment',
    name: '',
    contact: '',
    email: '',
    city: '',
    vehicleName: '',
    vehicleType: '',
    fuelType: '',
    registrationNumber: '',
    registrationDate: '',
    rcFile: '',
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
      alert('Vehicle attached successfully!');
    } else {
      alert('Failed to attach vehicle.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Attach Your Vehicle Today</h3>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Driver/Owner Name"
          aria-label="Driver/Owner Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          aria-label="Contact Number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Present City"
          aria-label="Present City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Vehicle Name"
          aria-label="Vehicle Name"
          name="vehicleName"
          value={formData.vehicleName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Vehicle Type"
          aria-label="Vehicle Type"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Fuel Type"
          aria-label="Fuel Type"
          name="fuelType"
          value={formData.fuelType}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Registration Number"
          aria-label="Registration Number"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="date"
          placeholder="Registration Date"
          aria-label="Registration Date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
        />
        <input
          type="file"
          aria-label="Registration Certificate (RC)"
          name="rcFile"
          onChange={(e) => setFormData({ ...formData, rcFile: e.target.files[0] })}
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
