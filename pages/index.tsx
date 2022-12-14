/* eslint-disable @next/next/no-script-component-in-head */
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Script from 'next/script'
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { graphcms, QUERY } from "../services";
import { ISkills, IJobs, IProjects, Theme, ICertificates } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Jobs } from "../components/Jobs";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import ScrollUp from "../assets/scrollup.svg";

interface IHomeProps {
  jobs: IJobs[];
  projects: IProjects[];
  skills: ISkills[];
  certificates: ICertificates[];
}

const Home: NextPage<IHomeProps> = ({ jobs, projects, skills, certificates }) => {
  const jobsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const certificatesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem("themeValue");
    setTheme(data === "light" || !data ? "light" : "dark");
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case "about":
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;

      case "jobs":
        scrollObject = {
          top: jobsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "projects":
        scrollObject = {
          top: projectsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "skills":
        scrollObject = {
          top: skillsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "certificates":
        scrollObject = {
          top: certificatesRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "contact":
        scrollObject = {
          top: contactRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div>
      <Head>
        <title>Muhammad Faishal Dienul Haq</title>
        <meta
          name="keywords"
          content="faishal, muhammad faishal dienul haq, software developer, web developer, backend engineer, backend developer"
        />
        <meta
          name="description"
          content="Hey, I'm Faishal a Software Developer from Indonesia. Here's my portfolio where you can see all my projects, blogs, and achievements."
        />
        <meta name="author" content="Muhammad Faishal Dienul Haq" />
        <link rel="icon" href="/logos_ico.ico" />
      </Head>

      <main data-theme={theme}>
        <Navbar onNavItemClick={handleNavItemClick} switchTheme={switchTheme} theme={theme} />

        <section className="about" >
          <About />
        </section>

        <section className="jobs" ref={jobsRef}>
          <Jobs jobs={jobs} />
        </section>

        <section className="projects" ref={projectsRef}>
          <Projects projects={projects} />
        </section>

        <section className="skills" ref={skillsRef}>
          <Skills skills={skills} />
        </section>

        <section className="certificates" ref={certificatesRef}>
          <Certificates certificates={certificates} />
        </section>

        <section className="contact" ref={contactRef}>
          <Contact theme={theme} />
        </section>

        <Footer />

        {isVisible && <img src={ScrollUp.src} alt="" className="scroll-up" onClick={scrollToTop} />}

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </main>
      <Script src="/chatwoot.js" />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { skills, jobs, projects, certificates } = await graphcms.request(QUERY);

  return {
    props: {
      skills,
      jobs,
      projects,
      certificates,
    },
    revalidate: 10,
  };
};
