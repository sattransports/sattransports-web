import React from "react";
import VehicleAttachmentForm from "./vehicle_form/vehicle_form";
import styles from "./vehicle_section.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";

function VehicleAttachmentSection() {
  return (
    <section className={styles.vehicleAttachmentSection}>
      <SectionHeading head="Attach Your Vehicle to SAT Travels" />
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
