import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Style/Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Payment Successful</h1>

        <p>
          Your wedding booking has been confirmed successfully.
        </p>

        <Link to="/">
          <button className="success-btn">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;