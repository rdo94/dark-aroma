import React from "react";
import { Route } from "react-router-dom";

import { ShopPageContainer } from "./shop.styles";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from '../collectionPage/collection.component';

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default ShopPage;
