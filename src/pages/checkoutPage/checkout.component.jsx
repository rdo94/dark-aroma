import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>Product</HeaderBlockContainer>
            <HeaderBlockContainer>Description</HeaderBlockContainer>
            <HeaderBlockContainer>Quantity</HeaderBlockContainer>
            <HeaderBlockContainer>Price</HeaderBlockContainer>
            <HeaderBlockContainer>Remove</HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <TotalContainer>Your total: ${total.toFixed(2)}</TotalContainer>
        <StripeCheckoutButton price={total}/>
        <WarningContainer>
            ***Please use the following test CC number for payments***
            <br />
            Visa: 4242 4242 4242 4242 | Exp: 01/20 | CVV: 123
        </WarningContainer>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);
