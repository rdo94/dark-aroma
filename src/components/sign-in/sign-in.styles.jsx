import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, black } = Colors;

export const SignInContainer = styled.div`
  width: 55rem;
  height: 55rem;
  display: flex;
  padding: 2.5rem;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${black};
  border: 0.1rem solid ${primary_dark};
  border-radius: 0.5rem;

  h2 {
    color: ${primary_light};
    font-size: 4rem;
  }
`;
export const SignInButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
