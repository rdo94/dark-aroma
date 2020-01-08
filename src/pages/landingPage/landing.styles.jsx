import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, secondary_dark, white, black } = Colors;

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const LandingHeaderContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &:not(:last-child) {
    margin-top: 10rem;
  }
`;

export const LandingHeaderTitle = styled.h1`
  width: 30%;
  height: 10rem;
  font-family: Baskerville, sans-serif;
  font-size: 7rem;
  color: ${black};
  transition: all .5s;
  margin-top: 2rem;
  padding: 1rem 2rem;
  display: block;

  &:hover {
    color: ${primary_light};
    background-color: ${black};
    border: .5px solid ${primary_light};
    border-radius: 10px;
    transform: translateY(-.2rem) scale(1.02);
    box-shadow: 0 1rem 3rem rgba(${black}, .2);
  }
`;

export const LandingHeaderSubtitle = styled.span`
  width: 30%;
  height: auto;
  font-family: sans-serif;
  font-size: 2.7rem;
  color: ${primary_dark};
  transition: all .3s;
  display: block;
  padding: 1rem 2rem;

  &:hover {
    transform: translateY(-.2rem) scale(1.02);
    color: ${black};
    box-shadow: 0 1rem 3rem rgba(${black}, .3);
  }
`;
