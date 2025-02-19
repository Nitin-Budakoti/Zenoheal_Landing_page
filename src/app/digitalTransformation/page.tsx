import React from "react";
import NavBar from "./components/NAVBAR";
import Heading from "./components/heading";
import First from "./components/First"; // Importing First component
import Second from "./components/Second"; // Importing Second component
import Third from "./components/Third"; // Importing Third component
import Fourth from "./components/Fourth"; // Importing Fourth component
import Footer from "./components/Footer";

const DigitalTransformation: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Heading />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </div>
  );
};

export default DigitalTransformation;
