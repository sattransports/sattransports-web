import React from "react";
import ServiceBlock from "./serviceblock/service_block";
import styles from "./service_in_action.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import Image from "next/image";

const ServicesInAction = () => {
  return (
    <section className={styles.servicesInAction}>
      <SectionHeading head="Our Services in Action" />
      <CustomContainer>
        <div className={styles.row}>
          <div className={`${styles.serviceBlock} ${styles.width295}`}>
            <Image src='https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={800} height={800}></Image>
          </div>
          <div className={`${styles.serviceBlock} ${styles.width610}`}>
          <Image src='https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={800} height={800}></Image>
          </div>
          <div className={`${styles.serviceBlock} ${styles.width295}`}>
          <Image src='https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={800} height={800}></Image>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.serviceBlock} ${styles.width715}`}>
          <Image src='https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={800} height={800}></Image>
          </div>
          <div className={styles.column}>
            <div
              className={`${styles.serviceBlock} ${styles.width530height300}`}
            >
              <Image src='https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={800} height={800}></Image>
            </div>
            <div
              className={`${styles.serviceBlock} ${styles.width530height175}`}
            >
              <Image src='https://images.pexels.com/photos/17304862/pexels-photo-17304862/free-photo-of-a-blue-lamborghini-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={800} height={800}></Image>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesInAction;
