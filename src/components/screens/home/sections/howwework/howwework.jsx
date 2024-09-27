import React, { useState } from "react";
import styles from "./howwework.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const HowWeWork = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <section className={styles.aboutSection}>
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <div className={styles.left} data-aos="fade-right">
              <h2 className={styles.hr} data-aos="fade-up">
                How We Work
              </h2>
              <hr />
              <p>
                As a leading global employee transportation and logistics
                company, we specialize in creating tailored travel experiences.
                Our team is dedicated to providing exceptional service that
                exceeds your expectations. Whether you're a corporate client,
                individual traveler, or part of a group, we offer customized
                itineraries that showcase India's rich heritage and cultural
                diversity.
              </p>
              <br />
              <p>
                Our commitment to excellence has led us to partner with some of
                the world's most respected corporations. This collaboration not
                only validates our expertise but also ensures that we
                consistently deliver the highest quality travel solutions to
                every client.
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                necessitatibus similique ducimus minus rerum doloribus. Vitae,
                nobis? Consequuntur ut enim facilis mollitia reiciendis
                obcaecati amet praesentium incidunt magnam cum nesciunt
                doloribus molestiae explicabo ex, commodi excepturi non culpa
                quia ea beatae, tempore voluptates, a vitae dignissimos.
                Consectetur accusantium distinctio corrupti dolores quis.
                Nostrum dolores maxime temporibus autem alias, excepturi
                adipisci voluptatibus, sequi optio laboriosam veritatis rerum
                voluptate fugiat odio cum atque? Animi dolorum vel cupiditate
                velit? Dolores cum delectus beatae iusto minus, a nesciunt quae
                reiciendis explicabo alias animi quis voluptatum. Vel harum
                nihil eaque, ut velit est! Quasi sequi laudantium atque placeat
                illo! Esse dolores, unde in mollitia aperiam harum, cumque
                consequatur ea ratione deleniti nisi enim nam commodi quo? Optio
                voluptatum, consequatur tempora, eligendi ipsa impedit quo
                magnam voluptatibus totam amet ad odit quia vero ipsam nobis,
                expedita quos enim recusandae ea qui earum voluptate vitae
                debitis. Non!
              </p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className={styles.img} data-aos="fade-left">
              <Image src="/logo.png" alt="auto" fluid />
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default HowWeWork;
