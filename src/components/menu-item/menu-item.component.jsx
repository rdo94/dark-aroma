import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemDivs,
  BackgroundImage,
  MenuItemContent
} from "./menu-item.styles";

const MenuItem = ({ title, ...props }) => (
  <MenuItemDivs {...props}>
    <BackgroundImage {...props} />
    <MenuItemContent>
      <h1 className="title">{title}</h1>
    </MenuItemContent>
  </MenuItemDivs>
);

export default withRouter(MenuItem);
