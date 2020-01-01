import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/aroma.svg";

import {
  HeaderContainer,
  LogoContainer,
  DivOptions,
  DivOption
} from "./header.styles.jsx";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className="logo" />
    </LogoContainer>
    <DivOptions>
      <DivOption className="option" to="/menu">
        SHOP
      </DivOption>
      <DivOption className="option" to="/">
        CONTACT
      </DivOption>
      <DivOption className="option" to="/">
        SIGN IN
      </DivOption>
    </DivOptions>
  </HeaderContainer>
);

export default Header;
