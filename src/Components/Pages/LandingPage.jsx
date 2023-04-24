import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "../../Styles/LandingPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChartLine,
  faLaptopCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <div className="hero">
          <div className="hero-con">
            <header>
              <h1>
                Let's Build
                <span> Together!</span>
              </h1>
              <p>
                Web & App Design / Dev | Branding Solutions | Digital Marketing
              </p>
            </header>
            <div className="hero-text">
              <p>
                At Alproseltech, we're here to be your trusted technology
                partner. Let us help you upgrade your digital experience and
                achieve your goals.
              </p>
              <button>
                <p>Get Started</p>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  bounce
                  style={{ marginTop: "3px" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-con">
            <div className="abtitle-con">
              <div className="header-text">
                <h2>
                  <hr /> At Alproseltech we Deliver Trusted Digital Experiences
                </h2>
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
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-con">
            <div className="ser-title">
              <h3>What Do you need?</h3>
              <h2>We offer exclusive services</h2>
            </div>
            <div className="services">
              <div className="service-box">
                <div className="box">
                  <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                  <h4>Web and Mobile App Design/Development</h4>
                  <p>
                    Every thriving business needs to be heard. In other to do
                    that the business owner must ensure their business is
                    online. And that is one of the reasons your business needs a
                    website.
                  </p>
                  <button>Start your Project</button>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faChartLine} size="2x" />
                  <h4>Digital Marketing</h4>
                  <p>
                    Every thriving business needs to be heard. In other to do
                    that the business owner must ensure their business is
                    online. And that is one of the reasons your business needs a
                    website.
                  </p>
                  <button>Start your Project</button>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faLightbulb} size="2x" />
                  <h4>Branding and solutions</h4>
                  <p>
                    Your brand should reflect what your business stands for and
                    what sets it apart from your competitors – it expresses the
                    qualities, strengths and 'personality' of your business.
                  </p>
                  <button>Start your Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="works-con">
            <div className="work-title">
              <p>
                <hr />
                Our Projects
              </p>
              <h2>
                Our Outstanding Latest <span>Projects</span> & Works
              </h2>
            </div>
            <div className="work-box">
              <div className="box-con">
                <div className="img">
                  <img src={p1} alt="" />
                </div>
                <div className="wpt">
                  <h5>Name Of Project</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="box-con">
                <div className="img">
                  <img src={p2} alt="" />
                </div>
                <div className="wpt">
                  <h5>Name Of Project</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="box-con">
                <div className="img">
                  <img src={p3} alt="" />
                </div>
                <div className="wpt">
                  <h5>Name Of Project</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="box-con">
                <div className="img">
                  <img src={p4} alt="" />
                </div>
                <div className="wpt">
                  <h5>Name Of Project</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <button>
                <p>More</p>
                <FontAwesomeIcon icon={faAngleRight} bounce />
              </button>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <div className="testy-con">
            <div className="testy-title">
              <h2>Hear from our valued Customers</h2>
            </div>
            <div className="testy-box"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
