import { Container } from "@mui/material";
import avatar from "./assets/images/avatar.jpg";
import ION from "./assets/images/ion-logo.png";
import CTR from "./assets/images/ctr-logo.png";
import SADEEM from "./assets/images/sadeem-logo.png";
import HKS from "./assets/images/hks-logo.png";
import ION_WEBSITE from "./assets/images/ion-website.png";
import NP_AQUA from "./assets/images/np-aqua.png";
import HD_GROUP from "./assets/images/hdgroup.png";
import HAFEED from "./assets/images/hafeed-logo.png";
import TIKA from "./assets/images/tika-logo.png";
import RAQEEM from "./assets/images/raqeem-logo.jpeg";
import SK_GROUP from "./assets/images/skgroup.png";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  GitHub,
} from "@mui/icons-material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="main-title">Frontend Developer</h1>
        <h2 className="sub-title">
          I'm a passionate developer that loves to code.
        </h2>
        <img src={avatar} className="avatar" />
      </Container>
      <div className="intro-div">
        <Container>
          <h1 className="intro-title">Hi, I'm Doaa. Nice to meet you.</h1>
          <h2 className="intro-text">
            My web development journey started out of curiosity and interest,
            and that's why I love what I do today. I have two years of
            experience and practice in the field. I'm a fast-learner, and I'm
            passionate about acquiring and improving skills while providing
            services for clients.
          </h2>
        </Container>
      </div>
      <div className="companies-box">
        <div className="companies">
          <h1 className="main-title">Companies I've worked with:</h1>

          <div className="logos-container">
            <div>
              <a href="https://ctr.ly/">
                <img src={CTR} className="ctr-logo" />
              </a>
            </div>
            <div>
              <a href="https://sadeem-tech.com/">
                <img src={SADEEM} className="sadeem-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.ion.ly/">
                <img src={ION} className="ion-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.hks-services.com/">
                <img src={HKS} className="sadeem-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-box">
        <div className="skills-container">
          <div className="grid-border-right left-grid">
            <h1>Skills</h1>
            <h3>
              I like the mix of logic and creativity frontend development has to
              offer.
            </h3>
            <h2>Languages:</h2>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JavaScript</h3>
            <h3>TypeScript</h3>
            <h2>CSS frameworks:</h2>
            <h3>Bootstrap</h3>
            <h3>Material-UI</h3>
            <h3>TailwindCSS</h3>
            <h2>JavaScript frameworks:</h2>
            <h3>React</h3>
            <h3>Angular</h3>
            <h2>Other web development platforms:</h2>
            <h3>WordPress</h3>
          </div>

          <div className="right-grid">
            <h1>Experience</h1>
            <h3>
              I enjoy tackling different projects and bringing ideas to life in
              the browser.
            </h3>
            <h2>CTR | Frontend Web Developer</h2>
            <h6>August 2021 - August 2022 | Office-Remote Hybrid</h6>
            <h5>- Developing an Ecommerce Admin Dashboard using React.</h5>
            <h5>
              - Developing a corporate website for HD Investment Group using
              Wordpress.
            </h5>
            <h2>Ion Telecom and Technology | Frontend Web Developer</h2>
            <h6>July 2021 - Present | Office</h6>
            <h5>
              - Developing the official website for Ion Telecom and Technology
              using Wordpress.
            </h5>
            <h5>- Developing a Flight Booking Dashboard using React.</h5>
            <h5>- Developing a Hotel Management Dashboard using Angular.</h5>
            <h2>Freelance | Frontend Web Developer</h2>
            <h6>September 2022 - Present</h6>
            <h5>- Developing an Admin Panel for a mobile app using React.</h5>
            <h5>
              - Developing an Admin Panel for a Financial Management System.
            </h5>
            <h5>
              - Providing WordPress solutions to clients. Offering comprehensive
              services that include website development, customization, theme
              integration and plugin implementation.
            </h5>
            <h5>
              - Writing comprehensive unit tests to ensure the quality and
              functionality of components.
            </h5>
          </div>
        </div>
      </div>

      <h1 className="main-title">Public Projects:</h1>

      <div className="projects-container">
        <div className="project-card">
          <div>
            <a href="https://hdgroup.ly/">
              <img src={HD_GROUP} className="hd-website" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div>
            <a href="https://www.ion.ly/">
              <img src={ION_WEBSITE} className="ion-website" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div>
            <a href="https://npaqua.ly/">
              <img src={NP_AQUA} className="np-website" width={230} />
            </a>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <div>
            <a href="https://raqeem.ly/">
              <img
                src={RAQEEM}
                style={{ borderRadius: "8px" }}
                className="np-website"
                width={200}
              />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div>
            <a href="https://hafeedsoundart.ly/">
              <img
                src={HAFEED}
                style={{ borderRadius: "8px" }}
                className="np-website"
                width={200}
              />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div>
            <a href="https://skgroup.ly/">
              <img src={SK_GROUP} className="np-website" width={180} />
            </a>
          </div>
        </div>
      </div>

      <div className="logos-container"></div>

      <div className="contact-me-container">
        <div className="contact-me">
          <h1 className="contact-title">Let's get to work!</h1>
          <div className="contact-text-box">
            <div>
              <h2 className="contact-text">Interested in my services?</h2>
              <h2 className="contact-text">Feel free to contact me!</h2>
            </div>
          </div>

          <div className="gmail-box">
            <h2 className="gmail">doaabadri13@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="icons-container">
          <a href="https://www.linkedin.com/in/doaa-albadri-636a08199/">
            <LinkedIn fontSize="large" style={{ color: "white" }} />
          </a>
          <a href="https://github.com/doaa-albadri">
            <GitHub fontSize="large" style={{ color: "white" }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010698228804">
            <Facebook fontSize="large" style={{ color: "white" }} />
          </a>
          <a href="https://twitter.com/DoaaAlbadri_">
            <Twitter fontSize="large" style={{ color: "white" }} />
          </a>
          <a href="https://www.instagram.com/doaa_albadri13/">
            <Instagram fontSize="large" style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
