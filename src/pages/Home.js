import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/modal">Modal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
