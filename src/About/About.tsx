import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import reactLogo from "../assets/react-logo-square.png";
import typescriptLogo from "../assets/typescript-logo.svg.png";
import framerLogo from "../assets/framer-motion-square.png";

import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about">
      <Link to="/">
        <h1 className="about__heading">SPACE WEB</h1>
      </Link>
      <main className="about__contentContainer">
        <section className="about__section">
          <h2 className="about__subheading">
            Technologies used for this project:
          </h2>
          <p className="about__description">
            This website is build with Javascript framework - <span>React</span>{" "}
            and <span>Typescript</span>. For animations, I used{" "}
            <span>Framer Motion</span>. Connected with NASA{" "}
            <span>REST API</span>.
          </p>
          <div className="about__imagesContainer">
            <img
              className="about__techImage"
              src={typescriptLogo}
              alt="Typescript logo"
            />
            <img
              className="about__techImage about__techImage--react"
              src={reactLogo}
              alt="React logo"
            />
            <img
              className="about__techImage"
              src={framerLogo}
              alt="Framer Motion logo"
            />
          </div>
        </section>
        <section className="about__section">
          <h2 className="about__subheading">Contact</h2>
          <p className="about__description">
            To see more interesting projects, necessarily check my GitHub
            account - <a href="https://github.com/mvjl000">mvjl000</a>
            {"  "}
            <GitHubIcon className="about__icon" />
          </p>
          <p className="about__description">Made by Milosz Piskadlo</p>
        </section>
      </main>
    </div>
  );
};

export default About;
