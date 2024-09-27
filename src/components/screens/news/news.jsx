import React from "react";
import styles from "./news.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const NewsScreen = () => {
  return (
    <section className={styles.newsCard}>
      <CustomContainer>
        <div className={styles.newsCardContent}>
          <div className={styles.imageContainer}>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e19c659c713e548bffebcd031137399efef8dc11cfcd1f7d5a5ae7807a6f92ce?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188"
              alt="Maruti Suzuki cars"
              fluid
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              Record-Breaking Day: 50 Maruti Suzuki Cars Sold in Just 24 Hours!
            </h2>
            <p className={styles.description}>
              In an impressive move, SAT Travels purchased 50 Maruti Suzuki cars
              in a single day, setting a new record.
            </p>
            <button className={styles.button}>
              <div className={styles.buttonContent}>
                <span className={styles.buttonText}>Know More</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b553a0f749cc937d8013f8d805a8d22da75c9297bac3f28ddc3eccea9d64843?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188"
                  alt=""
                  className={styles.icon}
                />
              </div>
            </button>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default NewsScreen;
