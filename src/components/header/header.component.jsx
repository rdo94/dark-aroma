import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles.jsx";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img
        src="https://banner2.cleanpng.com/20180228/gzw/kisspng-coffee-espresso-cafe-logo-coffee-vector-material-5a9785e220e1d5.5290943815198796501347.jpg"
        alt="Coffee Espresso"
        className="logo"
      />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/">
        CONTACT
      </OptionLink>
      {currentUser ?
        (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </OptionLink>
        )
        :
        (
        <OptionLink to="/login">SIGN IN</OptionLink>
        )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden? null: <CartDropdown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
