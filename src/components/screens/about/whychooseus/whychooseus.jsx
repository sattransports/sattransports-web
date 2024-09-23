import React from "react";
import FeatureCard from "./feature_card/feature_card";
import styles from "./whychooseus.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const features = [
  {
    title: "Experienced Drivers",
    description:
      "Our drivers undergo rigorous training to ensure they are knowledgeable, skilled, and courteous.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2f7cad8eade6e78733f27b95a49f5464b162d7e8b40ffe022be52f45eafcb693?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Experienced driver behind the wheel",
  },
  {
    title: "Modern Fleet",
    description:
      "We maintain a fleet of well-maintained and clean vehicles to provide a comfortable and enjoyable ride.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e20df7e4f7853f89608a4fdef64dc23b25fc4a459bf5a0ef0d30f46ab1726d1?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Modern taxi in a city street",
  },
  {
    title: "Affordable Rates",
    description: "Enjoy competitive pricing without compromising on quality.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/46f12539605abcd0c8ce2e890399f4769a4b2e00b413248b177929ecd8fb0da0?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Affordable rate display on a taxi meter",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <SectionHeading head="Why Choose Us" />
      <CustomContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} reverse={index % 2 !== 0} />
        ))}
      </CustomContainer>
    </section>
  );
};

export default WhyChooseUs;
