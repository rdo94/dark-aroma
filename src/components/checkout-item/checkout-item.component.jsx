import React from "react";
import { connect } from "react-redux";

import {
  clearItem,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={"item"} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <i className="fas fa-minus" onClick={() => removeItem(cartItem)}></i>
        {quantity}
        <i className="fas fa-plus" onClick={() => addItem(cartItem)}></i>
      </QuantityContainer>
      <TextContainer>${price.toFixed(2)}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        <i className="fas fa-trash-alt"></i>
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
