import React from "react";
import "../../App.css";

const Card = ({ image, title, category, description, price, rate, count }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-category">{category}</p>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      <div className="product-rating">
        <span>Rating: {rate} / 5</span>
        <span>({count} reviews)</span>
      </div>
    </div>
  );
};

export default Card;
