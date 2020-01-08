import React from "react";
import { connect } from "react-redux";

import { FooterContainer, FooterCopyright } from "./footer.styles";

import FooterNavigation from "../footer-navigation/footer-navigation.component";

const Footer = () => (
  <FooterContainer>
    <FooterNavigation/>
    <FooterCopyright>
      <p>Copyright &copy;2020 Ryan Do. Please do not use for any personal and/or
      commercial purposes without the consent of the author.</p>
    </FooterCopyright>
  </FooterContainer>
);

export default Footer;
