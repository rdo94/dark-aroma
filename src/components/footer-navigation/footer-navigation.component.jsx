import React from "react";

import {
  FooterNavigationContainer,
  FooterNavigationGroup,
  FooterNavigationLink
} from "./footer-navigation.styles";

const FooterNavigation = () => (
  <FooterNavigationContainer>
    <FooterNavigationGroup>
      <FooterNavigationLink>
        <a href="https://www.facebook.com">
        <i className="fab fa-facebook facebook-icon"></i>
        </a>
      </FooterNavigationLink>
      <FooterNavigationLink>
        <a href="https://www.instagram.com">
        <i className="fab fa-instagram instagram-icon"></i>
        </a>
      </FooterNavigationLink>
      <FooterNavigationLink>
        <a href="https://www.twitter.com">
        <i className="fab fa-twitter twitter-icon"></i>
        </a>
      </FooterNavigationLink>
      <FooterNavigationLink>
        <a href="https://www.github.com">
        <i className="fab fa-github github-icon"></i>
        </a>
      </FooterNavigationLink>
      <FooterNavigationLink>
        <a href="https://www.google.com">
        <i className="fab fa-google google-icon"></i>
        </a>
      </FooterNavigationLink>
    </FooterNavigationGroup>
  </FooterNavigationContainer>
);

export default FooterNavigation;
