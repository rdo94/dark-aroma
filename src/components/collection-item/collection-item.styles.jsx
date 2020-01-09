import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, black, white } = Colors;

export const CollectionItemContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const ItemImageContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 50%;

  &:hover > img {
    filter: blur(2px) brightness(80%);
  }

  &:hover > img + div {
    opacity: 1;
    visibility: visible;
  }
`;

export const ItemImage = styled.img.attrs(props => ({
  src: props.src
}))`
  border: 1px solid ${primary_light};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 10rem;
  left: 5rem;
  transition: all 0.3s;
  z-index: 2;
`;

export const ViewButton = styled(CustomButton)``;
export const AddButton = styled(CustomButton)``;

export const ItemDescription = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${secondary_light};
  background-color: ${black};
  border-radius: 0.8rem;
  color: ${primary_light};
  padding: 1rem 2rem;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  display: block;
`;

export const PriceContainer = styled.span`
  width: 10%;
  font-size: 1.4rem;
  display: block;
`;
