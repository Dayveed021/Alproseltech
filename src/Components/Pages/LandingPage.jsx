import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "../../Styles/LandingPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faCalendar,
  faChartLine,
  faLaptopCode,
  faLightbulb,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";
import b1 from "../../Images/b1.jpg";
import b2 from "../../Images/b2.jpg";
import b3 from "../../Images/b3.jpg";
import ap from "../../Images/ap.png";
import user from "../../Images/user.jpg";
import skilled from "../../Images/Skilled.png";
import custom from "../../Images/Custom.png";
import quality from "../../Images/Quality.png";
import affordable from "../../Images/Affordable.png";
import support from "../../Images/Support.png";
import blog1 from "../../Images/Blog-image1.jpg";
import blog2 from "../../Images/Blogimage-2.png";
import blog3 from "../../Images/blog3.jpg";
import admin from "../../Images/admin.jpg";
import Typing from "react-typing-effect";

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
                    <FontAwesomeIcon icon={faLightbulb} size="2x" />
                    <h4>Branding Solutions</h4>
                    <p>
                      Your brand should reflect what your business stands for
                      and what sets it apart from your competitors – it
                      expresses the qualities, strengths and 'personality' of
                      your business.
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
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <h4>Digital Marketing</h4>
                    <p>
                      By using a combination of our digital marketing strategies
                      such as SEO & social media marketing, it is possible to
                      drive more traffic to your website or business, increase
                      brand awareness, and improve overall conversion rates.
                    </p>
                    <button>Start your Project</button>
                  </div>
                </div>
              </div>
            </div>
            <button className="view-btn">View more services</button>
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
          <div className="why-auto">
            <div className="auto-text">
              <h2>
                We are here to provide you with{" "}
                <Typing
                  speed={50}
                  eraseDelay={1000}
                  loop={true}
                  className="typed-text"
                  text={[
                    " Quality service",
                    " Fast completion",
                    " Affordable price",
                  ]}
                />
              </h2>
            </div>
            <div className="auto-text-2">
              <h2>
                We provide you with <br />
                <Typing
                  speed={50}
                  eraseDelay={1000}
                  loop={true}
                  className="typed-text"
                  text={[
                    "  Quality service",
                    " Fast completion",
                    " Affordable price",
                    "24/7 Support",
                  ]}
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-title">
            <h3>Our Blog</h3>
            <h2>
              News & <span>Updates</span>
            </h2>
          </div>
          <div className="blog-desc">
            <p>
              Our blog offers engaging content for all interests, with a focus
              on creativity, expertise, and community. User-friendly and
              personalized, with a commitment to transparency and social
              responsibility, we make a positive impact.
            </p>
            <button>
              <span>All Blogs</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="blogs">
            <div className="blogs-con">
              <div className="blog-main">
                <img src={blog1} alt="" />
                <div className="blog-desc">
                  <p>Business</p>
                  <h2>
                    How Having a Website or Mobile App Can Boost Your Bottom
                    Line
                  </h2>
                </div>
                <div className="blog-writer">
                  <div className="admin">
                    <img src={admin} alt="" />
                    <div className="admin-dets">
                      <FontAwesomeIcon icon={faUser} />
                      <h5>Admin</h5>
                    </div>
                  </div>
                  <div className="time">
                    <FontAwesomeIcon icon={faCalendar} color="#053f5c" />
                    <p>01, April 2023</p>
                  </div>
                </div>
              </div>
              <div className="blog-main">
                <img src={blog2} alt="" />
                <div className="blog-desc">
                  <p>Artificial Intelligence</p>
                  <h2>
                    How AI Can Transform Your Business and Scale Up Your Profits
                  </h2>
                </div>
                <div className="blog-writer">
                  <div className="admin">
                    <img src={admin} alt="" />
                    <div className="admin-dets">
                      <FontAwesomeIcon icon={faUser} />
                      <h5>Admin</h5>
                    </div>
                  </div>
                  <div className="time">
                    <FontAwesomeIcon icon={faCalendar} color="#053f5c" />
                    <p>01, April 2023</p>
                  </div>
                </div>
              </div>
              <div className="blog-main">
                <img src={blog3} alt="" />
                <div className="blog-desc">
                  <p>Branding</p>
                  <h2>What You Should Know About Branding</h2>
                </div>
                <div className="blog-writer">
                  <div className="admin">
                    <img src={admin} alt="" />
                    <div className="admin-dets">
                      <FontAwesomeIcon icon={faUser} />
                      <h5>Admin</h5>
                    </div>
                  </div>
                  <div className="time">
                    <FontAwesomeIcon icon={faCalendar} color="#053f5c" />
                    <p>01, April 2023</p>
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
