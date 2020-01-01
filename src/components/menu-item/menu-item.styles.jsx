import styled from "styled-components";

import { Colors } from "../../data/variables";

const { primary_light, primary_dark, secondary_dark, black } = Colors;

export const MenuItemDivs = styled.div`
  width: 30%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid ${black};
  border-radius: .8rem;
  overflow: hidden;
  position: absolute;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    left: 6rem;
    top: 15rem;
    margin-right: 0.75rem;
  }

  &:not(:first-child):not(:last-child) {
    left: 55rem;
    top: 15rem;
  }

  &:last-child {
    left: 105rem;
    top: 15rem;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.imageUrl});
  background-size: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 4s ease-in;
  }
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
