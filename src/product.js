import React, { useState } from "react";
import './product.css';
import { useNavigate } from 'react-router-dom';

const colors = [
  { name: "Pink", hex: "#f4b5c2" },
  { name: "Green", hex: "#a2c3a4" },
  { name: "Black", hex: "#444" },
  { name: "Blue", hex: "#c7d5f3" },
  { name: "Silver", hex: "#d0d0d0" },
];

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Pink");

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };
  const navigate = useNavigate()
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-grid">
          <div className="product-image-section">
            <img
              src="./airpodmaxs.png" 
              alt="AirPods Max"
              className="product-image"
            />
            <div className="color-selector">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-swatch ${
                    selectedColor === color.name ? "color-swatch-selected" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                ></div>
              ))}
            </div>
          </div>
          <div className="product-details-section">
            <h2 className="product-title">AirPods Max</h2>
            <p className="product-description">
              A perfect balance of exhilarating high-fidelity audio and the
              effortless magic of AirPods.
            </p>
            <p className="product-price">$549.00</p>
            <p className="product-financing">
              or $99.99/month with 6 months special financing
            </p>
            <div className="quantity-selector">
              <p className="quantity-label">Choose Quantity</p>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
            </div>
            <p className="stock-info">
              Only 12 items left! Don’t miss it.
            </p>
            <div className="action-buttons">
              <button onClick={() => navigate("/Buy") } className="buy-now-button">
                Buy Now
              </button>
              <button className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
            <div className="delivery-info">
              <p className="delivery-item">
                <span className="delivery-label">Free Delivery:</span> Enter your
                postal code for delivery availability.
              </p>
              <p className="delivery-item">
                <span className="delivery-label">Return Delivery:</span> Free
                30-day delivery returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
