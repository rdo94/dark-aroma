import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, black, white } = Colors;

export const CheckoutItemContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10rem;
  border-bottom: 1px solid ${primary_light};
  padding: 1.5rem 0;
  font-size: 2rem;
`;

export const ImageContainer = styled.div`
  width: 13%;
  padding-right: 1.5rem;
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  border: 0.1px solid ${primary_light};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.span`
  width: 20%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  .minus-icon,
  .plus-icon {
      cursor: pointer;
      margin-top: .3rem;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;
