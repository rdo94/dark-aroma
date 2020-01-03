import React from "react";
import { Route } from "react-router-dom";

import { ShopPageContainer } from "./shop.styles";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

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
  </ShopPageContainer>
);

export default ShopPage;
