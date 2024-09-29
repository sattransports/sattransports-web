const { Container } = require("react-bootstrap");

const CustomContainer = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {" "}
      {/* Spread props to allow dynamic attributes */}
      {children} {/* Render child elements inside the container */}
    </Container>
  );
};

export default CustomContainer;
