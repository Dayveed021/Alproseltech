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
import b1 from "../../Images/b1.jpg";
import b2 from "../../Images/b2.jpg";
import b3 from "../../Images/b3.jpg";
import ap from "../../Images/ap.png";
import star from "../../Images/star.png";
import user from "../../Images/user.jpg";
import skilled from "../../Images/Skilled.png";
import custom from "../../Images/Custom.png";
import quality from "../../Images/Quality.png";
import affordable from "../../Images/Affordable.png";
import support from "../../Images/Support.png";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const writer = [
  {
    id: 1,
    testimony:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, aut fugiat molestias quia vitae veniam harum iure explicabo cupiditate ratione dolorum dolorem recusandae id quisquam modi perspiciatis et repellat eligendi?",
    picture: user,
    name: "Adelank Sam",
    title: "CEO of SUNPOWER",
  },
  {
    id: 2,
    testimony:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, aut fugiat molestias quia vitae veniam harum iure explicabo cupiditate ratione dolorum dolorem recusandae id quisquam modi perspiciatis et repellat eligendi?",
    picture: user,
    name: "Victor Gabriel",
    title: "CEO of OBITEX",
  },
  {
    id: 3,
    testimony:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, aut fugiat molestias quia vitae veniam harum iure explicabo cupiditate ratione dolorum dolorem recusandae id quisquam modi perspiciatis et repellat eligendi?",
    picture: user,
    name: "Jamz Ofotori",
    title: "CEO of DRIVEWAY",
  },
];

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
              <div className="text-con">
                <p>
                  We are a team of seasoned experts in software development and
                  IT related affairs working harmoniously to achieve success.
                </p>
                <p>
                  Our approach to work is straight forward as possible and makes
                  it easier for the client to achieve their desired goal. First,
                  we get to document your idea, paint a picture of your idea by
                  creating a sample for your review and thereafter we build and
                  attain completion prior to final approval.
                </p>
                <p>
                  We are ever ready to take up even more challenging projects
                  with stringent deadlines and deliver to clients' satisfaction.
                </p>
                <button>Learn More</button>
              </div>
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
                  <div className="box-main">
                    <img src={b3} alt="" />
                    <div className="type">Web & App Design/Dev</div>
                  </div>
                  <div className="overlay">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    <h4>Web and Mobile App Design/Development</h4>
                    <p>
                      Every thriving business needs to be heard. In other to do
                      that the business owner must ensure their business is
                      online. And that is one of the reasons your business needs
                      a website.
                    </p>
                    <button>Start your Project</button>
                  </div>
                </div>
                <div className="box">
                  <div className="box-main">
                    <img src={b1} alt="" />
                    <div className="type">Branding Solutions</div>
                  </div>
                  <div className="overlay">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    <h4>Web and Mobile App Design/Development</h4>
                    <p>
                      Every thriving business needs to be heard. In other to do
                      that the business owner must ensure their business is
                      online. And that is one of the reasons your business needs
                      a website.
                    </p>
                    <button>Start your Project</button>
                  </div>
                </div>
                <div className="box">
                  <div className="box-main">
                    <img src={b2} alt="" />
                    <div className="type">Digital Marketing</div>
                  </div>
                  <div className="overlay">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    <h4>Web and Mobile App Design/Development</h4>
                    <p>
                      Every thriving business needs to be heard. In other to do
                      that the business owner must ensure their business is
                      online. And that is one of the reasons your business needs
                      a website.
                    </p>
                    <button>Start your Project</button>
                  </div>
                </div>
              </div>
            </div>
            <button>View more services</button>
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
                Our Latest <span>Projects</span> & Works
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
              <h3>Testimonials</h3>
              <h2>Hear from our valued Customers</h2>
            </div>
            <div className="testy-box">
              {writer.map((writer) => (
                <div key={writer.id} className="testy-main">
                  <img src={ap} alt="" />
                  <p>{writer.testimony}</p>
                  <div className="writer-dets">
                    <div className="writer-img">
                      <img src={writer.picture} alt="" />
                    </div>
                    <div className="write-dets">
                      <h4>{writer.name}</h4>
                      <span>{writer.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="why">
          <div className="why-con">
            <div className="why-title">
              <div className="why-ben">
                <div className="why-lines">
                  <div className="whyline-main"></div>
                  <hr />
                </div>
                <h3>Our Benefits</h3>
              </div>
              <h2>Why Choose Us?</h2>
            </div>
            <div className="e-ben">
              <div className="eben-con">
                <div className="eben-main">
                  <div className="bens">
                    <img src={skilled} alt="" />
                    <div className="bens-text">
                      <h3>Experienced Team</h3>
                      <p>
                        Our team of developers has years of experience in
                        building websites and mobile applications that meet the
                        unique needs of our clients.
                      </p>
                    </div>
                  </div>
                  <div className="bens">
                    <img src={custom} alt="" />
                    <div className="bens-text">
                      <h3>Custom Solutions</h3>
                      <p>
                        Our team of developers has years of experience in
                        building websites and mobile applications that meet the
                        unique needs of our clients.
                      </p>
                    </div>
                  </div>
                  <div className="bens">
                    <img src={quality} alt="" />
                    <div className="bens-text">
                      <h3>Quality Assurance</h3>
                      <p>
                        Our team of developers has years of experience in
                        building websites and mobile applications that meet the
                        unique needs of our clients.
                      </p>
                    </div>
                  </div>
                  <div className="bens">
                    <img src={affordable} alt="" />
                    <div className="bens-text">
                      <h3>Affordability</h3>
                      <p>
                        Our team of developers has years of experience in
                        building websites and mobile applications that meet the
                        unique needs of our clients.
                      </p>
                    </div>
                  </div>
                  <div className="bens">
                    <img src={support} alt="" />
                    <div className="bens-text">
                      <h3>24/7 Support</h3>
                      <p>
                        Our team of developers has years of experience in
                        building websites and mobile applications that meet the
                        unique needs of our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
