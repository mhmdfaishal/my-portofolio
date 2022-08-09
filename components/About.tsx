import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";
import photo from "../assets/Profile.png";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_right">
        <div className="about_right_profilePic" data-aos="fade-up"/>
      </div>
      <div className="about_left">
        <h1 className="about_left_head" data-aos="slide-up">Hi, I&apos;m Faishal</h1>
        <p className="about_left_text" data-aos="slide-up">
          Software Engineer
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
          {/* <img
            src={gmail.src}
            alt=""
            onClick={() => window.open("mailto:haq.faishaldien@gmail.com", "_blank")}
          /> */}
        </div>
      </div>
    </>
  );
};
