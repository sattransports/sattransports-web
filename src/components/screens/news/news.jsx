import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./news.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const NewsScreen = () => {
  return (
    <main className={styles.heroNews}>
      <SectionHeading head="Latest News & Events at SAT Travels" />
      <CustomContainer>
        <section className={styles.heroSection}>
          <p className={styles.heroText}>
            We are excited to share the latest developments and updates
            happening at SAT Travels. From our expanding client base to new
            partnerships, here's a quick overview of recent highlights:
          </p>
        </section>

        <article className={styles.newsCard}>
          <div className={styles.cardContent}>
            <div className={styles.imageWrapper}>
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e19c659c713e548bffebcd031137399efef8dc11cfcd1f7d5a5ae7807a6f92ce?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188"
                alt="Maruti Suzuki cars"
                className={styles.newsImage}
              />
            </div>
            <div className={styles.newsContent}>
              <h2 className={styles.newsTitle}>
                Record-Breaking Day: 50 Maruti Suzuki Cars Sold in Just 24
                Hours!
              </h2>
              <p className={styles.newsDescription}>
                In an impressive move, SAT Travels purchased 50 Maruti Suzuki
                cars in a single day, setting a new record.
              </p>
              <a
                href="/assets/Daily Thanthi ePaper1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.knowMoreButton}
              >
                <span>Know More</span>
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b553a0f749cc937d8013f8d805a8d22da75c9297bac3f28ddc3eccea9d64843?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188"
                  alt=""
                  className={styles.arrowIcon}
                />
              </a>
            </div>
          </div>
        </article>
      </CustomContainer>
    </main>
  );
};

export default NewsScreen;
