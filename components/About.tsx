import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

export const About: NextPage = () => {

  return (
    <>
      <div className="about_right">
        <div className="about_right_profilePic" data-aos="fade-up"/>
      </div>
      <div className="about_left">
        <h1 className="about_left_head" data-aos="slide-up">Hi, I&apos;m Faishal</h1>
        <p className="about_left_text" data-aos="slide-up">
          <i>Undergraduate (Software Engineer / Backend)</i> <br /><br />
          <span> A <b>Computer Science</b> student at <b>Padjadjaran University</b> who is also an <i>Adaptive &amp; Fast-Learner</i> person and He&apos;s interested on <b>Software Development</b>.</span>
        </p>
        <div className="about_left_socialMedia" data-aos="zoom-in-up">
          <img
            src={github.src}
            alt=""
            onClick={() => window.open("https://github.com/mhmdfaishal", "_blank")}
          />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/mhmdfaishal/", "_blank")}
          />
          <img
            src={instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/mhmdfaishaal/", "_blank")}
          />
        </div>
        <div className="about_left_resume">
          <a onClick={() => window.open("https://drive.google.com/file/d/18OycPCyX2OxSAyED7kyGLmNg6pm1gNa0/view?usp=sharing", "_blank")}>See My Resume <FontAwesomeIcon icon={faAngleRight}/></a>
        </div>
      </div>
    </>
  );
};
