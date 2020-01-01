import styled from "styled-components";

import { Colors } from "../../data/variables";

const { primary_light, primary_dark, secondary_dark, black } = Colors;

export const MenuItemDivs = styled.div`
  width: 30%;
  height: 35rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid ${black};
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
    opacity: 0.8;

    & .background-image {
      transform: scale(1.5);
      transition: transform 6s ease;
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`;

export const MenuItemContent = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${secondary_dark};
  background-color: ${primary_dark};
  opacity: 0.7;
  position: absolute;

  .title {
    color: ${black};
    text-transform: capitalize;
    font-size: 5rem;
  }
`;
