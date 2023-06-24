import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Product from './Product';
import Product from "../../Components/products";
const ProductDisplayPage = () => {
  const products = [
    { name: "Product 1", price: 10, image: "../Assets/default.jpg" },
    { name: "Product 2", price: 20, image: "product2.jpg" },
    { name: "Product 3", price: 30, image: "product3.jpg" },
    { name: "Product 1", price: 10, image: "../Assets/default.jpg" },
    { name: "Product 2", price: 20, image: "product2.jpg" },
    { name: "Product 3", price: 30, image: "product3.jpg" },
    { name: "Product 1", price: 10, image: "../Assets/default.jpg" },
    { name: "Product 2", price: 20, image: "product2.jpg" },
    { name: "Product 3", price: 30, image: "product3.jpg" },
    // Add more products as needed
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplayPage;
