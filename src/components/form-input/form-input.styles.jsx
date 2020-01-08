import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, secondary_dark, white, black, light_red_1, light_green_1 } = Colors;

export const FormInputGroup = styled.div`
  position: relative;
  color: ${black};

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Input = styled.input`
  background: none;
  background-color: ${white};
  font-size: 1.8rem;
  padding: 1rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${black};
  transition: all .3s;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(${primary_light}, 0.2);
    border-bottom: 3px solid ${light_green_1};
  }

  &:focus:invalid {
    border-bottom: 3px solid ${light_red_1};
  }

  &::-webkit-input-placeholder {
    color : ${secondary_dark};
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  &:placeholder-shown ~ .input-label {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Label = styled.label`
  color: ${primary_light};
  font-size: 1.7rem;
  font-weight: 700;
  margin-left: .5rem;
  margin-top: .1rem;
  display: block;
  transform: translateY(-9rem);
  transition: all .3s;
`;
