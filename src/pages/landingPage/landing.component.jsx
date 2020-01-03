import React from "react";

import {
  LandingPageContainer,
  LandingHeaderContainer,
  LandingButtonContainer,
  LandingButton
} from "./landing.styles";

const LandingPage = () => (
  <LandingPageContainer style={{
    backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/HD-free-coffee-wallpaper-768x480.jpg)',
    backgroundSize: 'cover'
  }}>
    <LandingHeaderContainer>
      <h1 className="header">Dark Aroma</h1>
      <span className="details">The home for all coffee enthusiast</span>
    </LandingHeaderContainer>
    <LandingButtonContainer>
      <LandingButton to="/menu">
        <span className="shop-text">View Our Selections</span>
        <span className="shop-arrow">&#x27A1;</span>
      </LandingButton>
    </LandingButtonContainer>
  </LandingPageContainer>
);

export default LandingPage;
