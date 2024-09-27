import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import WhyChooseUs from "./whychooseus/whychooseus";
import ManagementTeam from "./management/management";
import ImageCarousel from "./image_carousal/image_carousal";

const AboutScreen = () => {
  const missionValuesData = [
    {
      title: "Our Mission",
      description:
        "To be the preferred transportation partner for individuals and businesses, offering innovative solutions that exceed customer expectations.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e45e10a0391e4fd7e175db4f3257eba0fefc793950a96c9ce6f2bceca39debd7?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    },
    {
      title: "Our Values",
      description:
        "SAT Taxi is committed to providing safe, reliable, and exceptional transportation services through innovation and integrity.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/597f2de64108eac30c43b3d5d156e9d1101ca90a2be7a23962d46508c5fd9c58?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    },
  ];

  return (
    <main className={styles.aboutScreen}>
      <SectionHeading head="About Us" />
      <CustomContainer>
        <p className={styles.caption}>
          SAT Taxi is a leading provider of reliable and efficient taxi
          services. We are committed to delivering exceptional customer
          experiences and ensuring your journeys are safe, comfortable, and
          convenient. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Natus sapiente a eos incidunt error doloremque quas eligendi quidem
          rem, deleniti quae ex eius ducimus eum veritatis iure dignissimos,
          provident iusto aut! Praesentium doloribus, tempore maxime perferendis
          est quod nisi nulla, eveniet aut repudiandae inventore dolorum
          incidunt, ut perspiciatis id dolore!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          soluta. Tenetur sequi nam recusandae corporis assumenda ex esse vero
          aperiam voluptatem soluta facilis consectetur tempore, a quo vel, eius
          facere asperiores! Voluptates ad ipsam vitae dolorem commodi, natus
          cum odit veritatis incidunt dolorum numquam quod ut dolores, tenetur
          alias quo minus maxime impedit fugiat qui iure assumenda sequi? Harum
          ipsa illum nemo mollitia ratione aliquam cupiditate, accusantium ad
          possimus necessitatibus quibusdam dolorum ea cumque tenetur magni
          nobis dolore cum? Eos ab quo atque voluptatibus numquam eum, quasi
          repudiandae quidem itaque molestiae, est nobis laboriosam laudantium
          reprehenderit consectetur, distinctio pariatur sed!
        </p>
        <br />
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
                        alt={item.title}
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
        <WhyChooseUs />
        <ManagementTeam />
        <ImageCarousel />
      </CustomContainer>
    </main>
  );
};

export default AboutScreen;
