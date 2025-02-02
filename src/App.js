import { useEffect, useState } from "react";

import "./App.css";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Details from "./components/Details/Details";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import WorkCard from "./components/WorkCard/WorkCard";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

import HD from "./assets/images/hdgroup.png";
import SK from "./assets/images/skgroup.png";
import NP from "./assets/images/np-aqua.png";
import ION from "./assets/images/ion-logo.png";
import HAFEED from "./assets/images/hafeed-logo.png";
import RAQEEM from "./assets/images/raqeem-logo.jpeg";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setTimeout(() => {
      setShowContent(true);
    }, 5500);

    return () => {};
  }, []);

  const slideInStyle = {
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateX(0)" : "translateX(-100%)",
    transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
    position: "relative",
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeSrcipt",
    "React",
    "Angular",
    "WordPress",
  ];

  const work = [
    {
      date: "2021 - 2022",
      company: "CTR",
      description:
        "Developed an Ecommerce Admin Dashboard using React, and developed a corporate website for HD Investment Group using Wordpress.",
      tools: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    },
    {
      date: "2022 - Present",
      company: "Ion Telecom and Technology",
      description:
        "Specializing in the development of administrative dashboards tailored for management, booking, and inventory systems, alongsid crafting WordPress-based websites.",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "JavaScript",
        "React",
        "Angular",
        "WordPress",
      ],
    },
    {
      date: "2022 - Present",
      company: "Freelance ",
      description:
        "Developed an Admin Panel for a mobile app using React and another for a Financial Management System. Additionally, I provide WordPress solutions to clients, offering a comprehensive range of services such as website development, customization, theme integration, and plugin implementation. Furthermore, I have experience in writing comprehensive unit tests to ensure the quality and functionality of components.",
      tools: ["HTML", "CSS", "JavaScript", "JavaScript", "React", "WordPress"],
    },
  ];

  const projects = [
    { link: "https://hdgroup.ly/", img: HD },
    { link: "https://www.ion.ly/", img: ION },
    { link: "https://npaqua.ly/", img: NP },
    { link: "https://raqeem.ly/", img: RAQEEM },
    { link: "https://hafeedsoundart.ly/", img: HAFEED },
    { link: "https://skgroup.ly/", img: SK },
  ];

  return (
    <main className={` font-sans`}>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
      <CustomCursor />
      {loading ? (
        <SplashScreen />
      ) : (
        <div style={slideInStyle}>
          <nav
            className={`flex justify-center items-center gap-5 }`}
            style={{
              position: "sticky",
              top: "0",
              height: "50px",
              backgroundColor: "#0f172a",
              fontWeight: "600",
              zIndex: "1",
            }}
          >
            <ul className="flex justify-center items-center gap-5 menu">
              <li>
                <a href="#intro">Intro</a>
              </li>
              <li>
                <a href="#tools">Tools</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div
            id="intro"
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
              paddingTop: "15%",
            }}
            className="grid md:grid-cols-1 gap-4 mb-20"
          >
            <div>
              <Details />
            </div>
          </div>

          <div className="intro-fade-out">
            <Intro />
          </div>

          <div id="tools" className="	tools-fade">
            <h5
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "600",
              }}
              className={`} mb-5 tools`}
            >
              Tools
            </h5>
            <div className="flex justify-center gap-5 flex-wrap">
              {skills.map((skill, index) => {
                return <Skill key={index} skill={skill} />;
              })}
            </div>
          </div>

          <div
            id="experience"
            className="mt-20  work-slide-right"
            style={{ paddingRight: "10%", paddingLeft: "10%" }}
          >
            <h5
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "600",
              }}
              className={` mb-5 tools`}
            >
              Work Experience
            </h5>
            <div className="grid md:grid-cols-2 gap-5">
              {work.map((item, index) => {
                return (
                  <WorkCard
                    key={index}
                    date={item.date}
                    company={item.company}
                    description={item.description}
                    tools={item.tools}
                  />
                );
              })}
            </div>
          </div>

          <div
            id="projects"
            className="mt-20"
            style={{ paddingRight: "10%", paddingLeft: "10%" }}
          >
            <h5
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "600",
              }}
              className={` mb-5 tools`}
            >
              Public Projects
            </h5>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {projects.map((proj, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <Project link={proj.link} img={proj.img} />
                  </div>
                );
              })}
            </div>
          </div>

          <div id="contact" className="mt-20">
            <Footer />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
