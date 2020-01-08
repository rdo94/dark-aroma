import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, black, white, light_gray } = Colors;

export const MenuItemContainer = styled.div`
  width: 33%;
  height: 90%;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  border: 0.4px solid ${primary_light};
  border-radius: 0.8rem;
  background-color: ${black};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 60%;
  border: 0.4px solid ${primary_light};
  border-radius: 0.8rem;
  background-image: url(${props => props.imageUrl});
  background-size: cover;

  &:hover {
    transform: scale(1.05);
    transition: transform 2s ease-in;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem 2rem;

  color: ${primary_light};
`;

export const ContentTitle = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const ContentSubtitle = styled.span`
  font-size: 1.7rem;
  font-weight: 400;
  font-family: Baskerville, sans-serif;
`;
