import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import { ShopPageContainer } from "./shop.styles";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from '../collectionPage/collection.component';

const ShopPage = ({ match }) => (
  <ShopPageContainer
    style={{
      backgroundImage:
        "url(https://www.pixelstalk.net/wp-content/uploads/images1/HD-free-coffee-wallpaper-768x480.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}
  >
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default ShopPage;
