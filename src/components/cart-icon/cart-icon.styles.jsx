import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

import { Colors } from "../../data/color";

const { primary_light, black, white } = Colors;

export const CartIconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${primary_light};
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 1.2rem;
`;
