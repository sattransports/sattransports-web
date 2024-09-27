import React from "react";
import VehicleAttachmentForm from "./vehicle_form/vehicle_form";
import styles from "./vehicle_section.module.scss";

function VehicleAttachmentSection() {
  return (
    <section className={styles.vehicleAttachmentSection}>
      <h2>Attach Your Vehicle to SAT Travels</h2>
      <p>
        Do you own a vehicle and want to make the most of it? Join SAT Travels
        and become a part of our trusted network of vehicles that deliver
        premium travel services across the globe. Whether you own a car, van, or
        bus, we are looking for reliable partners to help us serve our growing
        clientele.
      </p>
      <VehicleAttachmentForm />
    </section>
  );
}

export default VehicleAttachmentSection;
