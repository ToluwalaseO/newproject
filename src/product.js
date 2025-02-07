import React, { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Pink");
  const colors = ["Pink", "Green", "Black", "Blue", "Silver"];

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
          <div>
            <img
              src="./airpodmaxs" // Replace with actual image URL
              alt="AirPods Max"
              className="w-full rounded-lg"
            />
            <div className="flex mt-4 space-x-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`h-10 w-10 rounded-full cursor-pointer border ${
                    selectedColor === color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color === "Pink"
                        ? "#f4b5c2"
                        : color === "Green"
                        ? "#a2c3a4"
                        : color === "Black"
                        ? "#444"
                        : color === "Blue"
                        ? "#c7d5f3"
                        : "#d0d0d0",
                  }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-semibold">AirPods Max</h2>
            <p className="text-gray-600 mt-2">
              A perfect balance of exhilarating high-fidelity audio and the
              effortless magic of AirPods.
            </p>
            <p className="text-xl font-bold mt-4">$549.00</p>
            <p className="text-sm text-gray-500">
              or $99.99/month with 6 months special financing
            </p>

            {/* Quantity Selector */}
            <div className="mt-6">
              <p className="text-gray-700 font-semibold">Choose Quantity</p>
              <div className="flex items-center mt-2">
                <button
                  className="bg-gray-300 text-black px-3 py-1 rounded-l"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">
                  {quantity}
                </span>
                <button
                  className="bg-gray-300 text-black px-3 py-1 rounded-r"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock Info */}
            <p className="text-red-600 font-medium mt-4">
              Only 12 items left! Don’t miss it.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Buy Now
              </button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">
                Add to Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 space-y-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Free Delivery:</span> Enter your
                postal code for delivery availability.
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Return Delivery:</span> Free
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
