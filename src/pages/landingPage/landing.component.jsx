import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../sass/pages/landing.styles.scss";

const LandingPage = () => (
  <div className="landing-page">
    <div className="landing-content">
      <h1 className="header">Dark Aroma</h1>
      <span className="details">Home for all coffee enthusiast</span>
    </div>
    <div className="landing-shop">
      <Link className="landing-shop-btn" to="/">
        <span className="shop-text">View Products</span>
        <span className="shop-arrow">&#x27A1;</span>
      </Link>
    </div>
  </div>
);

export default LandingPage;
