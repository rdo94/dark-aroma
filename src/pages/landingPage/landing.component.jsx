import React from "react";

import Directory from '../../components/directory/directory.component';


import {
  LandingPageContainer,
  LandingHeaderContainer,
  LandingHeaderTitle,
  LandingHeaderSubtitle
} from "./landing.styles";

const LandingPage = () => (
  <LandingPageContainer style={{
    backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/HD-free-coffee-wallpaper-768x480.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>
    <LandingHeaderContainer>
      <LandingHeaderTitle>
      Dark Aroma
      </LandingHeaderTitle>
      <LandingHeaderSubtitle>
      The home for all coffee enthusiast
      </LandingHeaderSubtitle>
    </LandingHeaderContainer>
    <Directory/>
  </LandingPageContainer>
);

export default LandingPage;
