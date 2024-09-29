import React from "react"; // React import.
import Header from "./header/header"; // Header component.
import Footer from "./footer/footer"; // Footer component.

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> {/* Header */}
      {children} {/* Dynamic content */}
      <Footer /> {/* Footer */}
    </div>
  );
};

export default Layout;
