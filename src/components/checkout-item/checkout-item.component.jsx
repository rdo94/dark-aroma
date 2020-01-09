import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <Image src={imageUrl} alt={"item"} />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
      <i className="fas fa-minus minus-icon"></i>
      {quantity}
      <i className="fas fa-plus plus-icon"></i>
    </QuantityContainer>
    <TextContainer>{price.toFixed(2)}</TextContainer>
    <RemoveButtonContainer>
      <i className="fas fa-trash-alt"></i>
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);

export default CheckoutItem;
