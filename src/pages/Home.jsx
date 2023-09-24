import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper">
      <h1> Welcome to our Sneakers Shop</h1>
      <p>Get the latest sneakers</p>
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;
