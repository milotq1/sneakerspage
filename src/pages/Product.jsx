import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product.scss";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/sneakers/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Error Loading...</div>;
  }

  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="image-wrapper">
          <img src={product.media.imageUrl} alt={product.title} />
        </div>
        <div className="product-desc">
          <h1>{product.title}</h1>
          <p>
            <small>ID: {product.styleId}</small>
          </p>
          <p><b>Brand:</b> {product.brand}</p>
          <p><b>Cuisine:</b> {product.colorway}</p>
          <p><b>Release Date:</b> {product.releaseDate}</p>
          <button>Buy it now</button>
       </div>
      </div>
    </div>
  );
}

export default Product;
