import styled, { css } from "styled-components";

import { Colors } from "../../data/variables";

const { white, black } = Colors;

export const FormInputGroup = styled.div`
  position: relative;
  margin: 4.5rem 0;
  color: ${black};
`;

export const Input = styled.input`
  background: none;
  background-color: ${white};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${black};
  margin: 2.5rem 0;

  &:focus {
    outline: none;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;