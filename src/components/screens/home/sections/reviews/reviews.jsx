import { Image } from "react-bootstrap"; // Bootstrap Image component.
import styles from "./reviews.module.scss"; // SCSS module for styling.
import { StarFill, StarHalf } from "react-bootstrap-icons"; // Bootstrap icons for star ratings.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.

// Review component that displays individual review details.
const Review = ({ data }) => {
  return (
    <div className={styles.scrItem}>
      <div className={styles.img}>
        <Image src={`/assets/home/review/${data.img}`} fluid alt="user" />{" "}
        {/* Reviewer image */}
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{data.name}</p> {/* Reviewer name */}
        <div>
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarHalf className={styles.star} /> {/* 4.5 star rating */}
        </div>
        <small className={styles.cont}>{data.text}</small> {/* Review text */}
      </div>
    </div>
  );
};

// Main ReviewsSection component that displays reviews in a scrolling carousel.
const ReviewsSection = () => {
  const aboutData = [
    {
      name: "Atos",
      text: "Reliable and efficient transportation services. Always on time and meets our expectations every single time.",
      img: "user1.png",
    },
    {
      name: "Bank of America",
      text: "Exceptional service with a focus on safety and punctuality. SAT ensures a smooth commute for our team.",
      img: "user2.png",
    },
    {
      name: "Sagility",
      text: "Consistently delivers high-quality transport services, offering flexibility and reliability for our workforce.",
      img: "user3.png",
    },
    {
      name: "Flex",
      text: "Professional drivers and a tech-enabled fleet make SAT a dependable partner for our daily transportation needs.",
      img: "user1.png",
    },
    {
      name: "Green Warrior",
      text: "Sustainable and efficient transportation solutions. SAT has been a key partner in our green initiatives.",
      img: "user2.png",
    },
    {
      name: "HCL",
      text: "Top-notch service with 24/7 availability. Their dedication to safety and comfort is unparalleled.",
      img: "user3.png",
    },
    {
      name: "Herald",
      text: "Impressive technology integration and service standards. SAT has elevated our corporate transportation experience.",
      img: "user1.png",
    },
    {
      name: "Raido",
      text: "Reliable transport services that ensure timely pick-up and drop-off for our employees, every day.",
      img: "user2.png",
    },
    {
      name: "TCS",
      text: "Efficient and professional, SAT has been a critical partner in maintaining our operational excellence.",
      img: "user3.png",
    },
  ];

  return (
    <section className={styles.reviewsSection}>
      <SectionHeading head="Discover Why Riders Love Us" />{" "}
      {/* Section heading */}
      <div className={styles.overlay} />
      <div className={styles.fader} />
      <div className={styles.scroller}>
        <div className={styles.scrollHolder}>
          {aboutData.map((d, i) => (
            <Review key={`scr_${i}`} data={d} />
          ))}{" "}
          {/* Render reviews */}
        </div>
        <div className={styles.scrollHolder}>
          {aboutData.map((d, i) => (
            <Review key={`scr_${i}`} data={d} />
          ))}{" "}
          {/* Duplicate for infinite scrolling */}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
