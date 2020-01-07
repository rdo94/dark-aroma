import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, secondary_dark, white, black } = Colors;

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const LandingHeaderContainer = styled.div`
  height: 30%;
`;

export const LandingHeaderTitle = styled.h1`
  width: 100%;
  height: 60%;
  font-family: Baskerville, sans-serif;
  font-size: 7.5rem;
  color: ${black};
  transition: all .2s;
  margin-top: 2rem;
  padding: 1rem 2rem;

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
  width: 100%;
  height: 40%;
  font-family: Lato, sans-serif;
  font-size: 3rem;
  color: ${primary_dark};
  transition: all .3s;

  &:hover {
    transform: translateY(-.10rem) rotate(10deg) scale(1.02);
    color: ${black};
    box-shadow: 0 1rem 3rem rgba(${black}, .3);
  }
`;
