import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "../../Styles/LandingPage.scss";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landingpage">Landing page</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
