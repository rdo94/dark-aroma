import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_dark, black } = Colors;

export const MenuItemContainer = styled.div`
  width: 33%;
  height: 60%;
  display: flex;
  margin-top: 3rem;
  margin-left: 1rem;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${black};
  border-radius: .8rem;
  overflow: hidden;

  &:hover .background-image {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;

  &:hover {
    transform: scale(1.05);
    transition: transform 2s ease-in;
  }
`;

export const ContentContainer = styled.div`
  width: 15%;
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${secondary_dark};
  background-color: ${primary_dark};
  opacity: 0.7;
  position: absolute;
  }
`;

export const ContentTitle = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: ${secondary_dark};
`;
