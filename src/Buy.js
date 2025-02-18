import React from "react";
//  import "./Buy.css"

const Buy = () => {
    return (
        <div className="buy">
            <div className="topical">
                <h1>Review Items And Shipping</h1>
                <h2>Airpods-Max</h2>
                <h2>$549.00</h2>
                <p> Color Pink</p>
                <p>Quantity: 4</p>
            </div>

            <div className="topic">
                <h1>Delivery Information</h1>
                <button>Edit Information</button>
                <p><b>Name:</b> James Frosh</p>
                <p><b>Address:</b> 123, Frosh Street, Opebi</p>
                <p><b>City:</b> Ikeja</p>
                <p><b>Zip Code:</b> 101021</p>
                <p><b>Mobile:</b> +234082318321</p>
                <p><b>Email:</b> jamesfrosh@realmail.com</p>
            </div>

            <div className="rightbar">
                <h1>Order Summary</h1>
                <input type="text" placeholder="Enter Coupon Code" />
                <button>Apply Coupon</button>
                
                <h2>Payment Details</h2>
                <ul>
                    <li>Cash on Delivery</li>
                    <li>Shopcart Card</li>
                    <li>Paypal</li>
                    <li>Credit or Debit Card</li>
                </ul>

                <h1>Email**</h1>
                <input type="email" placeholder="Type Here" />
                
                <h1>CardHolder Name**</h1>
                <input type="text" placeholder="Type Here" />
            </div>
        </div>
    );
};

export default Buy;
