import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, light_red_1, light_green_1 } = Colors;

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
  border-radius: 1rem;
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

  i {
      cursor: pointer;
      margin-top: .3rem;
      transition: all .2s;

      &:hover {
          transform: translateY(-.3rem) scale(1.01);

          &:first-child {
            color: ${light_red_1};
          }

          &:last-child {
            color: ${light_green_1};
          }
      }
  }

`;

export const RemoveButtonContainer = styled.div`
  text-align: center;
  cursor: pointer;
  transition: all .2s;

  &:hover {
      color: ${primary_dark};
      transform: translateY(-.3rem) scale(1.01);
      box-shadow: 0 1rem 3rem rgba(black, .2);
  }
`;
