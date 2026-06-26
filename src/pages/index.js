import React from "react";

import HomeLink from "../components/HomeLink";
import Meta from "../components/Meta";
import ProjectGrid from "../components/ProjectGrid";
import Avatar from "../assets/avatar-round.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import BlogIcon from "../assets/icons/blog.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";
import EveToolsIcon from "../assets/projects/evetools.png";
import DashbdIcon from "../assets/projects/dashbd.png";
import CalendarIcon from "../assets/projects/calendar.png";
import ApniaIcon from "../assets/projects/apnia.png";
import FlameIcon from "../assets/projects/flame.png";
import EventWipeIcon from "../assets/projects/eventwipe.png";
import SpinoIcon from "../assets/projects/spino.png";
import PewsteroidsIcon from "../assets/projects/pewsteroids.png";

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

const projects = [
  { name: "EveTools", icon: EveToolsIcon, href: "https://evetools.app" },
  { name: "Dashbd", icon: DashbdIcon, href: "https://dashbd.com" },
  { name: "Calendar", icon: CalendarIcon, href: "https://dashbd.com/calendar" },
  { name: "Apnia", icon: ApniaIcon, href: "https://apnia.co" },
  { name: "Flame", icon: FlameIcon, href: "https://useflame.app" },
  { name: "EventWipe", icon: EventWipeIcon, href: "https://eventwipe.com" },
  { name: "Spino", icon: SpinoIcon, href: "https://spino.tapadi.uno" },
  { name: "Pewsteroids!", icon: PewsteroidsIcon, href: "https://pew.tapadi.uno" },
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
      <h2 className="no-gap">
        Founder @ <a href="https://dashbd.com">Dashbd</a>
      </h2>
      <h2>Creator of many apps</h2>
      <ProjectGrid projects={projects} />
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
