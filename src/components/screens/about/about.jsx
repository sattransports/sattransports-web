import React from "react"; // React import.
import styles from "./about.module.scss"; // SCSS module for styling.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for consistent layout.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import WhyChooseUs from "./why_choose_us/why_choose_us"; // "Why Choose Us" component.
import ManagementTeam from "./management/management"; // Management team component.
import ImageCarousel from "./image_carousal/image_carousal"; // Image carousel component.
import { missionValuesData } from "@/constants/contact"; // Mission and values data from constants.

const AboutScreen = () => {
  return (
    <main className={styles.aboutScreen}>
      <SectionHeading head="About Us" /> {/* About Us heading */}
      <CustomContainer>
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* Column for the text */}
            <div className={styles.bannerLeftContent}>
              <p>
                Shree Annamalaiyar Travels (SAT) began its journey over a decade
                ago, driven by a vision to provide safe, reliable, and punctual
                transportation services tailored to the needs of IT companies.
                Since our humble beginnings, we have grown into a trusted name
                in the employee transportation industry.
              </p>
              <br />
              <p>
                In 2012, SAT launched with a modest fleet, laying the foundation
                for future growth. By 2015, we expanded our clientele and fleet
                size to 50+ vehicles.
              </p>
              <br />
              <p>
                By 2023, SAT expanded its fleet to 75+ vehicles, delivering
                prompt, safe, and reliable transportation services for IT
                companies.
              </p>
              <br />
              <p>
                Our journey reflects our dedication and unwavering focus on
                providing the best transportation solutions.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Column for the image */}
            <div className={styles.bannerRightImgSec}>
              <Image
                loading="lazy"
                src="/assets/about/sidecar.png"
                alt="car img"
                className={styles.bannerImg}
              />
            </div>
          </div>
        </div>
        <br />

        {/* Mission and Values Section */}
        <div className={styles.missionValuesSection}>
          <div className={styles.valuesContainer}>
            {missionValuesData.map((item, index) => (
              <div key={index} className={styles.valueItem}>
                <div className={styles.valueContent}>
                  <div className={styles.valueHeader}>
                    <span className={styles.iconBlock}>
                      <Image
                        loading="lazy"
                        src={item.icon}
                        alt={item.title} // Alt text for icons.
                        className={styles.valueIcon}
                        width={48}
                        height={48}
                      />
                    </span>
                    <span className={styles.titleBlock}>{item.title}</span>
                  </div>
                  <p className={styles.valueDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Including other sections */}
        <WhyChooseUs />
        <ManagementTeam />
        <ImageCarousel />
      </CustomContainer>
    </main>
  );
};

export default AboutScreen;
