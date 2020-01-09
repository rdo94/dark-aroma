import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  ItemImageContainer,
  ItemImage,
  ItemDescription,
  NameContainer,
  PriceContainer,
  ButtonContainer,
  ViewButton,
  AddButton
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return( <CollectionItemContainer>
    <ItemImageContainer>
      <ItemImage src={imageUrl} />
      <ButtonContainer>
        <ViewButton inverted>View details</ViewButton>
        <AddButton inverted onClick={() => addItem(item)}>Add to Cart</AddButton>
      </ButtonContainer>
    </ItemImageContainer>
    <ItemDescription>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </ItemDescription>
  </CollectionItemContainer>)

};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
