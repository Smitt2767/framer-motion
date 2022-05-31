import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/modal">Modal</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/canvas">Canvas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
