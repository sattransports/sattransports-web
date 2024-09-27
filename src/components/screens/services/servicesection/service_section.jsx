import React from "react";
import ServiceItem from "./serviceItem/service_item";
import styles from "./service_section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const services = [
  {
    title: "Employee Transportation",
    description:
      "SAT Travels provides dedicated employee transport services tailored to the unique needs of businesses. We understand the importance of timely and secure transportation for your workforce, and our well-maintained fleet ensures reliable daily commutes. Our solutions are flexible and can be customized to suit multiple shifts and routes, offering GPS-enabled vehicles, professional drivers, and 24/7 support. With SAT Travels, your employees can count on stress-free, comfortable commutes every day, boosting productivity and satisfaction.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/25eec75f4951ecbd7478cd427f9dfbbcb57dbd39e924b9a6c3bf76dfd81494ad?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Employee transportation service",
    imagePosition: "left",
  },
  {
    title: "Corporate Travel",
    description:
      "For business professionals seeking efficient and comfortable travel solutions, SAT Travels offers premium corporate travel services. Whether it's executive airport transfers, intercity business trips, or transporting guests for corporate events, our fleet is designed to impress. From luxury sedans to spacious SUVs, our vehicles come equipped with modern amenities and are driven by experienced professionals. With our corporate travel services, your business will enjoy punctual, discreet, and hassle-free transportation, ensuring smooth operations and enhancing your company's image.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8af8c3ada9cc5eb34be67801250323ba93447d7188041d4ef874e42b63a8f35c?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Corporate travel service",
    imagePosition: "right",
  },
  {
    title: "Vehicle Rentals",
    description:
      "SAT Travels offers a wide range of vehicle rental options that cater to both local and outstation travel needs. Whether you require a compact car for city commutes or a larger vehicle for a family vacation or business trip, our extensive fleet includes everything from hatchbacks to 14-seater travelers. Our rental services provide flexible booking options, from hourly rentals to long-term hires, ensuring convenience for personal or business use. Travel with peace of mind knowing that all our vehicles are regularly serviced and equipped for your comfort and safety.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb104248c53aae812609392cc964a4257a346365a71237c823527b6e0e921199?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Vehicle rental service",
    imagePosition: "left",
  },
  {
    title: "Bus Travel Services",
    description:
      "At SAT Travel, we offer comprehensive Bus Travel Services tailored to meet the diverse needs of corporate clients, educational institutions, and individuals. Whether it's daily employee transportation, school trips, or group travel for corporate events, our bus services ensure safe, comfortable, and reliable transportation. With a modern fleet of well-maintained buses and professional drivers, we guarantee a hassle-free travel experience, no matter the distance or destination.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b4814bc4b8939b7685b4d8c1494113404a615bd5c12f91b96dc5a4cf1c40833b?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188",
    imageAlt: "Bus travel service",
    imagePosition: "right",
  },
];

function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <CustomContainer>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </CustomContainer>
    </section>
  );
}

export default ServiceSection;
