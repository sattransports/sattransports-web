import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container component for layout.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.
import { Col, Image, Row } from "react-bootstrap"; // Bootstrap components for layout and images.
import styles from "./fleet.module.scss"; // SCSS module for styling.

// Card component that represents each vehicle.
const Card = ({ data, isEven }) => {
  const { head, text, id, img } = data;

  return (
    <Col xs={12} md={6} lg={3} className={styles.c}>
      <div
        className={styles.card}
        data-aos={`flip-${isEven ? "right" : "left"}`} // Animation based on the card's index (even or odd).
      >
        <Image src={img} alt={id} height={200} data-aos="fade-left" />{" "}
        {/* Vehicle image */}
        <h4>{head}</h4> {/* Card title */}
        <p>{text}</p> {/* Card description */}
      </div>
    </Col>
  );
};

// Main Fleet component that showcases the vehicle fleet.
const Fleet = () => {
  const cards = [
    {
      id: "mini",
      img: "/assets/home/mini.svg",
      head: "MINI",
      text: "SAT Taxi offers affordable Economy Class rides with well-maintained hatchbacks, ensuring the same comfort and quality as our premium sedans.",
    },
    {
      id: "micro",
      img: "/assets/home/micro.svg",
      head: "MICRO",
      text: "SAT Taxi's Micro is the most economical choice for city travel, perfect for students and frequent commuters looking to save.",
    },
    {
      id: "sedan",
      img: "/assets/home/sedan.svg",
      head: "SEDAN",
      text: "Experience ultimate comfort with SAT Taxi's business class sedans - perfect for family trips, business travels, and long drives.",
    },
    {
      id: "SUV",
      img: "/assets/home/suv.svg",
      head: "SUV",
      text: "Enjoy blissful long trips and local outings with SAT Taxi's wide range of vehicles, from 3-seat hatchbacks to 14-seat travelers, available for both outstation rentals and hourly use.",
    },
  ];

  return (
    <section className={styles.whyUs}>
      <SectionHeading head="Our Vehicle Fleet" variant={2} />{" "}
      {/* Section heading */}
      <CustomContainer>
        <p className={styles.p}>
          Ideal for comfortable and efficient city driving, offering a balance
          of space and fuel economy.
        </p>
        <br />
        <Row>
          {cards.map((c, i) => (
            <Card key={c.id} data={c} isEven={i % 2} />
          ))}
        </Row>
      </CustomContainer>
    </section>
  );
};

export default Fleet;
