import { Container } from "@mui/material";
import avatar from "./assets/images/avatar.jpg";
import langs from "./assets/images/langs.png";
import tools from "./assets/images/tools.png";
import ION from "./assets/images/ion-logo.png";
import CTR from "./assets/images/ctr-logo.png";
import SADEEM from "./assets/images/sadeem-logo.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
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
            experience and practice in the field. I'm a fast-learner, and
            passionate about acquiring and improving skills while providing
            services for clients.
          </h2>
        </Container>
      </div>
      <div className="skills-box">
        <div className="skills-container">
          <div className="grid-border-right left-grid">
            <img src={langs} className="langs-img" />
            <h1 className="langs-title">Languages</h1>
            <h3>
              I like the mix of logic and creativity frontend development has to
              offer.
            </h3>
            <h2>Here are the languages I speak:</h2>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JavaScript</h3>
            <h3>TypeScript</h3>
            <h2>What JavaScript framework I use:</h2>
            <h3>React</h3>
          </div>

          <div className="right-grid">
            <img src={tools} className="tools-img" />
            <h1 className="tools-title">Tools</h1>
            <h3>
              I enjoy using different dev tools and bringing ideas to life in
              the browser.
            </h3>
            <h2>Here are the dev tools I work with:</h2>
            <h3>Visual Studio Code</h3>
            <h3>Bootstrap</h3>
            <h3>Material-UI</h3>
            <h3>Github</h3>
          </div>
        </div>
      </div>
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
      </div>
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
          <a href="https://www.facebook.com/profile.php?id=100010698228804">
            <Facebook fontSize="large" style={{ color: "white" }} />
          </a>
          <a href="https://twitter.com/DoaaAbdulrahim">
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
