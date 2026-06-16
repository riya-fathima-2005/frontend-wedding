import React from "react";
import { Container } from "react-bootstrap";
import hostbanner from "../../assets/Images/Hailuo3.png";
import "../../assets/Style/Open.css";
import { Link } from "react-router-dom";

const Open = () => {
  return (
    <div
      className="host-banner"
      style={{ backgroundImage: `url(${hostbanner})` }}
    >
      <div className="join-overlay">
        <Container>
          <div className="join-content">
            <h2>
              Join hands, share smiles, and welcome the world to your special
              day.
            </h2>

            <div className="text-center py-3">
              <Link
                to="/howhost"
                className="faq-button text-decoration-none"
              >
                Register Your Wedding
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Open;