import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from "../../assets/aroma-cafe.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles.jsx";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/menu">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/">
        CONTACT
      </OptionLink>
      {
        currentUser ?
          (<OptionLink as="div" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
           </OptionLink>)
          :
          (<OptionLink to="/login">SIGN IN</OptionLink>)
      }
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);
