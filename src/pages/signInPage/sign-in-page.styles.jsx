import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, white, black } = Colors;

export const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 10rem auto;
`;

export const SignUpBox = styled.div`
  width: 38rem;
  height: 10rem;
  display: flex;
  margin: 0.5rem auto;
  justify-content: space-around;
  align-items: center;
  background-color: ${black};
  border: 0.1rem solid ${primary_dark};
  border-radius: 1rem;
  color: ${primary_light};
  opacity: 0.8;

  h2 {
    font-size: 2rem;
    color: ${primary_light};
  }
`;

export const SignUpButton = styled(Link)`
  color: ${white};
  font-size: 2rem;
  font-weight: normal;
`;
