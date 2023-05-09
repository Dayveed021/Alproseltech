import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FootLogo from "../Images/FootLogo.png.webp";
import "../Styles/Footer.scss";
import {
  faEnvelope,
  faEye,
  faLocation,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-con">
          <div className="logo-about">
            <div className="logo-main">
              <img src={FootLogo} alt="Alprosel" />
              <hr />
              <div className="socials">
                <div className="social">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="social">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="social">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="social">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="foot-dets">
            <section>
              <div className="address">
                <FontAwesomeIcon icon={faLocation} />
                <h3>Address</h3>
                <p>3 Ogbonda Street Eliowhani, Port Harcourt, NG</p>
              </div>
              <div className="contact">
                <h3>Contact Us</h3>
                <div className="contact-dets">
                  <div className="mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>Have any questions</h4>
                    <a href="mailto:hello@alproseltech.com">
                      hello@alproseltech.com
                    </a>
                  </div>
                  <div className="call">
                    <FontAwesomeIcon icon={faPhone} />
                    <h4>Call us</h4>
                    <a href="tel: +234 807 873 3543">+234 807 873 3543</a>
                    <a href="tel: +234 703 530 0818">+234 703 530 0818</a>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="blog">
                <h3>Blogs</h3>
                <div className="all-blog">
                  <div className="blogs">
                    <h4>Tech in oil and gas</h4>
                    <div className="blog-dets">
                      <div className="writer">
                        <FontAwesomeIcon icon={faUser} />
                        <p>I.J. Sampson</p>
                      </div>
                      <div className="views">
                        <FontAwesomeIcon icon={faEye} />
                        <p>202 Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="blogs">
                    <h4>Tech in oil and gas</h4>
                    <div className="blog-dets">
                      <div className="writer">
                        <FontAwesomeIcon icon={faUser} />
                        <p>I.J. Sampson</p>
                      </div>
                      <div className="views">
                        <FontAwesomeIcon icon={faEye} />
                        <p>202 Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="blogs">
                    <h4>Tech in oil and gas</h4>
                    <div className="blog-dets">
                      <div className="writer">
                        <FontAwesomeIcon icon={faUser} />
                        <p>I.J. Sampson</p>
                      </div>
                      <div className="views">
                        <FontAwesomeIcon icon={faEye} />
                        <p>202 Views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tweets">
                <div className="tweet-title">
                  <i class="fa-brands fa-twitter"></i>
                  <h3>Tweets</h3>
                </div>
                <div className="tweeted">
                  <div className="tweet">
                    <p>
                      <a href="">@alproseltech</a>, your event is not complete
                      without lights, stage and sound!
                    </p>
                  </div>
                  <div className="tweet">
                    <p>
                      <a href="">@alproseltech</a>, your event is not complete
                      without lights, stage and sound!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="works-mail">
                <div className="works">
                  <div className="work">
                    <p>Branding Solutions</p>
                  </div>
                  <div className="work">
                    <p>Web 3.0</p>
                  </div>
                  <div className="work">
                    <p>Web Apps</p>
                  </div>
                  <div className="work">
                    <p>Mobile Apps</p>
                  </div>
                </div>
                <div className="mail">
                  <h5>
                    Sign up for our mailing list to get latest updates and
                    offers
                  </h5>
                  <input type="email" placeholder="@ Email Address" />
                  <p>We value your privacy!</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="foot">
          <div className="foot-size">
            <p>©2023 All Rights Reserved | Alprosel Tech</p>
            <div className="foot-links">
              <Link to="/" className="foot-link">
                Terms and Conditions
              </Link>
              <Link to="/" className="foot-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
