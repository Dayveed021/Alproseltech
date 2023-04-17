import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "../../Styles/LandingPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <div className="hero">
          <div className="hero-con">
            <header>
              <h1>
                Empowering your Digital
                <span> Strategy!</span>
              </h1>
              <p>
                Web & App Design / Dev | Branding Solutions | Digital Marketing
              </p>
            </header>
            <div className="hero-text">
              <p>
                At Alproseltech, we're here to be you{" "}
                <span>trusted technology partner.</span> We specialize in{" "}
                <span>delivering cutting-edge solutions</span> that help
                businesses like yours stay ahead of the curve in today's
                fast-paced digital landscape. Let us help you upgrade your
                digital experience and <span>achieve your goals.</span>
              </p>
              <button>
                <p>Connect with us</p>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  bounce
                  style={{ marginTop: "3px" }}
                />
              </button>
            </div>
          </div>
          <div className="circle-1">Web and App Development</div>
          <div className="circle-2">Branding Solutions</div>
          <div className="circle-3">Digital Marketing</div>
        </div>
        <div className="about">
          <div className="about-con">
            <div className="abtitle-con">
              <header>
                <h4>About Alproseltech</h4>
                <div className="about-line"></div>
              </header>
              <div className="header-text">
                <h2>We Deliver Trusted Digital Experiences</h2>
              </div>
              <button>Start a Project</button>
            </div>
            <div className="about-text">
              <p>
                We are a team of seasoned experts in software development and IT
                related affairs working harmoniously to achieve success.
              </p>
              <p>
                Our approach to work is straight forward as possible and makes
                it easier for the client to achieve their desired goal. First,
                we get to document your idea, paint a picture of your idea by
                creating a sample for your review and thereafter we build and
                attain completion prior to final approval.
              </p>
              <p>
                We are ever ready to take up even more challenging projects with
                stringent deadlines and deliver to clients' satisfaction.
              </p>
              <button>Start a Project</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
