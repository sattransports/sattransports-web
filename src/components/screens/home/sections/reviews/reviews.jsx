import { Image } from "react-bootstrap";
import styles from "./reviews.module.scss";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const Review = ({ data }) => {
  return (
    <div className={styles.scrItem}>
      <div className={styles.img}>
        <Image src={`/assets/review/${data.img}`} fluid alt="user" />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{data.name}</p>
        <div>
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarHalf className={styles.star} />
        </div>

        <small className={styles.cont}>{data.text}</small>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const aboutData = [
    {
      name: "HCL",
      text: "250+ Standard quality checks",
      img: "review1.png",
    },
    {
      name: "Green Warrior",
      text: "3 Years free maintanance",
      img: "review3.png",
    },
    {
      name: "TCS",
      text: "On time delivery",
      img: "review2.png",
    },
    {
      name: "Teleperformance",
      text: "Lifetime service support",
      img: "review1.png",
    },
    {
      name: "Herald",
      text: "Tech-enabled Compnay",
      img: "review3.png",
    },
  ];

  const data = aboutData;

  return (
    <section className={styles.reviewsSection}>
      <SectionHeading head="Discover Why Riders Love Us" />
      <div className={styles.overlay} />
      <div className={styles.fader} />
      <div className={styles.scroller}>
        <div className={styles.scrollHolder}>
          {data.map((d, i) => {
            return <Review key={`scr_${i}`} data={d} />;
          })}
        </div>
        <div className={styles.scrollHolder}>
          {data.map((d, i) => {
            return <Review key={`scr_${i}`} data={d} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
