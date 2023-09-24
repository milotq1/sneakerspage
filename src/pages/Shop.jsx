import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./shop.scss";

function SneakerList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/sneakers?_limit=10")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="shop-container">
      <div className="shop-wrapper">
        <h1>Sneaker List</h1>
        <div className="box-container">
          <ul>
            {data.map((sneaker) => (
              <li key={sneaker.id}>
                <div className="list-container">
                  <img src={sneaker.media.imageUrl} alt={sneaker.title} />
                  <div className="desclist">
                    <h2>{sneaker.title}</h2>
                    <p>Brand: {sneaker.brand}</p>
                    <p>Cuisine: {sneaker.colorway}</p>
                    <p>Release Date: {sneaker.releaseDate}</p>
                  </div>
                </div>
                <Link to={`/product/${sneaker.id}`}>
                  <button>Shop Now</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SneakerList;
