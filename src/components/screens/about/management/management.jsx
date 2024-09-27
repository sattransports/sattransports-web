import React from "react";
import TeamMember from "./team_member/team_member";
import styles from "./management.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const teamMembers = [
  {
    name: "Mr. Yokeshwaran",
    position: "Director",
    description:
      "Our esteemed board of directors provides strategic guidance and oversight to SAT Travels. Their expertise and leadership ensure the company's continued growth and success.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/daaaf0bd900a7dffbad51bd082e2e041de7b0b94eeafcf538b76b975ba7b9765?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    reverse: false,
  },
  {
    name: "Mr. Yokeshwaran",
    position: "Director",
    description:
      "Our esteemed board of directors provides strategic guidance and oversight to SAT Travels. Their expertise and leadership ensure the company's continued growth and success.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/daaaf0bd900a7dffbad51bd082e2e041de7b0b94eeafcf538b76b975ba7b9765?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    reverse: true,
  },
];

const ManagementTeam = () => {
  return (
    <section className={styles.managementTeam}>
      <CustomContainer>
        <div className={styles.teamHeader}>
          <h2>Management Team</h2>
          <p>-------------------------------------</p>
        </div>
        <p className={styles.subtitle}>Meet the leaders behind SAT Travels</p>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </CustomContainer>
    </section>
  );
};

export default ManagementTeam;
