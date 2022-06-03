import React from "react";
import { Link } from "react-router-dom";

const links = [
  { path: "/animations", title: "Animations" },
  { path: "/modal", title: "Modal" },
  { path: "/accordion", title: "Accordion" },
  { path: "/canvas", title: "Canvas" },
  { path: "/switch", title: "Switch" },
  { path: "/tabs", title: "Tabs" },
].sort((a, b) => (a.title > b.title ? 1 : -1));

const Home = () => {
  return (
    <div className="app">
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
