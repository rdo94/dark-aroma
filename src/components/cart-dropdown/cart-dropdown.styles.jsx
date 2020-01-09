import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

import { Colors } from "../../data/color";

const { black, white } = Colors;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 33rem;
  height: 43rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid ${black};
  background-color: ${white};
  top: 7rem;
  right: 1rem;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartItemsContainer = styled.div`
  height: 26rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
