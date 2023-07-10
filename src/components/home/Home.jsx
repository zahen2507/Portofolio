import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello, <span>My Name Is</span>
        </p>

        <h1 className="home__title text-cs">
          <span>ZAHEN</span> WAFERA
        </h1>

        <p className="home__job">
          <span className="text-cs">I Am</span> <b>Front End Developer</b>
        </p>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt="" className="home__profile" />
          </div>

          <p className="home__data">
            <span className="text-lg">
              1 <b>+</b>
            </span>

            <span className="text-sm text-cs">
              1 Years of <span>Experience</span>
            </span>
          </p>

          <img src={shapeOne} alt="" className="shape shape__1" />
          <img src={shapeTwo} alt="" className="shape shape__2" />
        </div>

        <p className="home__text">
          Graduated of Binar Academy Front End Engineer course #5. I like to
          code things from scratch, and enjoy bringing ideas to life in the
          browser and comfortable working with frontend developer tools such as
          reactjs. I love javascript.
        </p>

        <div className="home__socials">
          <a href="" className="home__social-link">
            <FaInstagram />
          </a>

          <a href="" className="home__social-link">
            <FaFacebook />
          </a>

          <a href="" className="home__social-link">
            <FaTwitter />
          </a>

          <a href="" className="home__social-link">
            <FaLinkedin />
          </a>

          <a href="" className="home__social-link">
            <FaGithub />
          </a>
        </div>

        <div className="home__btns">
          <a href="" className="btn text-cs">
            Download My CV
          </a>

          <a href="" className="hero__link text-cs">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
