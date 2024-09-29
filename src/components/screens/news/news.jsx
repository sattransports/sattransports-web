import SectionHeading from "@/components/ui/section_heading/section_heading"; // Custom section heading component.
import React from "react";
import styles from "./news.module.scss"; // SCSS module for styling.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import { Image } from "react-bootstrap"; // Bootstrap Image component.

const NewsScreen = () => {
  return (
    <main className={styles.heroNews}>
      {/* Section heading for the news page */}
      <SectionHeading head="Latest News & Events at SAT Travels" />

      <CustomContainer>
        <section className={styles.heroSection}>
          <p className={styles.heroText}>
            At SAT Travels, we continuously strive for growth and innovation.
            Our team is always working hard to exceed industry standards and
            provide the best possible travel and transportation solutions. Here
            are some of the latest milestones and achievements that we're proud
            to share with our community:
          </p>
        </section>

        <article className={styles.newsCard}>
          <div className={styles.cardContent}>
            <div className={styles.imageWrapper}>
              <Image
                loading="lazy"
                src="/assets/news/50carsimg.png"
                alt="Maruti Suzuki cars"
                className={styles.newsImage} // Displaying the news image.
              />
            </div>

            <div className={styles.newsContent}>
              <h2 className={styles.newsTitle}>
                Record-Breaking Day: SAT Travels Takes Delivery of 50 Maruti
                Suzuki Cars in 24 Hours!
              </h2>
              <p className={styles.newsDescription}>
                In a monumental achievement, SAT Travels recently set a new
                record by acquiring 50 Maruti Suzuki cars in just one day! This
                significant expansion of our fleet underscores our commitment to
                providing the most reliable, safe, and efficient transportation
                solutions for our clients.
              </p>
              <br />
              <a
                href="/assets/news/Daily_Thanthi ePaper1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.knowMoreButton}
              >
                <span>Know More</span>
                <Image
                  loading="lazy"
                  src="/assets/news/rightarrow.svg"
                  alt="Right Arrow"
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
