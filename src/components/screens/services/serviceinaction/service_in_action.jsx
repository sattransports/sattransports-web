import React from "react"; // React import.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import styles from "./service_in_action.module.scss"; // SCSS module for styling.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.

const ServicesInAction = () => {
  return (
    <section className={styles.servicesInAction}>
      <SectionHeading head="Our Services in Action" data-aos="fade-up" />{" "}
      {/* Section Heading with animation */}
      <CustomContainer>
        <div className={styles.row}>
          <div
            className={`${styles.serviceBlock} ${styles.width295}`}
            data-aos="fade-up"
          >
            <Image
              src="https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg"
              alt="Service in action"
              width={800}
              height={800}
            />
          </div>
          <div
            className={`${styles.serviceBlock} ${styles.width610}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg"
              alt="Service in action"
              width={800}
              height={800}
            />
          </div>
          <div
            className={`${styles.serviceBlock} ${styles.width295}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg"
              alt="Service in action"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles.serviceBlock} ${styles.width715}`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg"
              alt="Service in action"
              width={800}
              height={800}
            />
          </div>
          <div className={styles.column}>
            <div
              className={`${styles.serviceBlock} ${styles.width530height300}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Image
                src="https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg"
                alt="Service in action"
                width={800}
                height={800}
              />
            </div>
            <div
              className={`${styles.serviceBlock} ${styles.width530height175}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Image
                src="https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg"
                alt="Service in action"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesInAction;
