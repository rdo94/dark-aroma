import styled from "styled-components";

import { Colors } from "../../data/color";

const { secondary_light, primary_dark, black } = Colors;

export const SignUpContainer = styled.div`
  width: 55rem;
  height: 55rem;
  display: flex;
  padding: 2.5rem;
  margin: 10rem auto;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${black};
  border: 0.1rem solid ${primary_dark};
  border-radius: 0.5rem;
`;
