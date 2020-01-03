import styled from "styled-components";

import { Colors } from "../../data/color";

const { secondary_light, primary_dark } = Colors;

export const SignUpContainer = styled.div`
  width: 55rem;
  height: 55rem;
  display: flex;
  padding: 2.5rem;
  margin: 5rem auto;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${secondary_light};
  border: 0.1rem solid ${primary_dark};
  border-radius: 0.5rem;
`;
