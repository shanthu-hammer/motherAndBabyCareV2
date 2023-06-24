import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Product = ({ name, price, image }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
