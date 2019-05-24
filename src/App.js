import React, { Component } from "react";
import Helmet from "react-helmet";
import "./App.css";
import HomeLink from "./HomeLink";
import Avatar from "./assets/avatar-round.svg";
import TwitterIcon from "./assets/icons/twitter.svg";
import LinkedInIcon from "./assets/icons/linkedin.svg";
import GithubIcon from "./assets/icons/github.svg";

const links = [
  /*{
    icon: ResumeIcon,
    title: "Resume",
    href: "/resume"
  },
  {
    icon: TwitterIcon,
    title: "Blog",
    href: "/blog"
  },*/
  {
    icon: TwitterIcon,
    title: "Twitter",
    href: "https://twitter.com/benoitzohar"
  },
  {
    icon: LinkedInIcon,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/benoitzohar/"
  },
  {
    icon: GithubIcon,
    title: "Github",
    href: "https://github.com/benoitzohar"
  }
];

class App extends Component {
  render() {
    return (
      <main>
        <Helmet title="Benoit Zohar" />
        <img className="avatar" src={Avatar} alt="Avatar" />
        <h1>Benoit Zohar</h1>
        <h2>
          Senior Fullstack Developer @{" "}
          <a href="https://www.busbud.com/en">Busbud</a>
        </h2>
        <div className="home-links">
          {links.map(link => (
            <HomeLink
              key={link.title}
              icon={link.icon}
              title={link.title}
              link={link.href}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
