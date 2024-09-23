import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./fleet.module.scss";

const Card = ({ data, isEven }) => {
  const { head, text, id, img } = data;

  return (
    <Col xs={12} md={6} lg={3} className={styles.c}>
      <div
        className={styles.card}
        data-aos={`flip-${isEven ? "right" : "left"}`}
      >
        <Image src={`/assets/${img}`} alt={id} height={200} />
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </Col>
  );
};

const Fleet = () => {
  const cards = [
    {
      id: "sedan",
      img: "micro.svg",
      head: "SEDAN",
      text: "Experience ultimate comfort with SAT Taxi's business class sedans - perfect for family trips, business travels, and long drives.",
    },
    {
      id: "mini",
      img: "mini.svg",
      head: "MINI",
      text: "SAT Taxi offers affordable Economy Class rides with well-maintained hatchbacks, ensuring the same comfort and quality as our premium sedans.",
    },
    {
      id: "micro",
      img: "micro.svg",
      head: "MICRO",
      text: "SAT Taxi's Micro is the most economical choice for city travel, perfect for students and frequent commuters looking to save.",
    },
    {
      id: "hatchback",
      img: "rental.svg",
      head: "HATCHBACK",
      text: "Enjoy blissful long trips and local outings with SAT Taxi's wide range of vehicles, from 3-seat hatchbacks to 14-seat travelers, available for both outstation rentals and hourly use.",
    },
  ];

  return (
    <section className={styles.whyUs}>
      <SectionHeading head="Our Vehicle Fleet" variant={2} />
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
