import styled from 'styled-components';

import { Colors } from '../../data/color';

const { primary_light } = Colors;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;
`;

export const CartItemImage = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
  width: 30%;
  border: .2px solid ${primary_light};
  border-radius: 50%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
