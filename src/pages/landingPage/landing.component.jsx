import React from "react";

import Directory from '../../components/directory/directory.component';

import {
  LandingPageContainer,
  LandingHeaderContainer,
  LandingHeaderTitle,
  LandingHeaderSubtitle
} from "./landing.styles";

const LandingPage = () => (
  <LandingPageContainer>
    <LandingHeaderContainer>
      <LandingHeaderTitle>Dark Aroma</LandingHeaderTitle>
      <LandingHeaderSubtitle>The home for all coffee enthusiast</LandingHeaderSubtitle>
    </LandingHeaderContainer>
    <Directory/>
  </LandingPageContainer>
);

export default LandingPage;
