import React from "react";

import HomeLink from "../components/HomeLink";
import Meta from "../components/Meta";
import Avatar from "../assets/avatar-round.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import BlogIcon from "../assets/icons/blog.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";

const links = [
  {
    icon: BlogIcon,
    title: "Blog",
    href: "/blog",
  },
  /*   {
    icon: TwitterIcon,
    title: "Twitter",
    href: "https://twitter.com/benoitzohar",
    external: true,
  }, */
  {
    icon: LinkedInIcon,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/benoitzohar/",
    external: true,
  },
  {
    icon: GithubIcon,
    title: "Github",
    href: "https://github.com/benoitzohar",
    external: true,
  },
];

export default function Home() {
  return (
    <div className="home">
      <Meta />
      <img className="avatar" src={Avatar} alt="Avatar" />
      <h1>Benoit Zohar</h1>
      <h2>
        Co-Founder @ <a href="https://evetools.app">EveTools</a>
      </h2>
      <h2>
        Founder @ <a href="https://dashbd.com">Dashbd</a>
      </h2>
      <h2 style={{ marginTop: 2 }}>
        Creator of many apps like <a href="https://dashbd.com">Dashbd</a>,{" "}
        <a href="https://dashbd.com/calendar">Calendar</a>,{" "}
        <a href="https://apnia.co">Apnia</a>,{" "}
        <a href="https://useflame.app">Flame</a>,{" "}
        <a href="https://spino.tapadi.uno">Spino</a> and{" "}
        <a href="https://pew.tapadi.uno">Pewsteroids!</a>
      </h2>
      <div className="home-links">
        {links.map((link) => (
          <HomeLink
            key={link.title}
            icon={link.icon}
            title={link.title}
            link={link.href}
            external={link.external}
          />
        ))}
      </div>
    </div>
  );
}
