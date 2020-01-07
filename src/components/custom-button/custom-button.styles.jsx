import styled, { css } from "styled-components";

import { Colors } from "../../data/color";

const {
  primary_light,
  primary_dark,
  secondary_light,
  secondary_dark,
  google_light,
  google_dark,
  white,
  black
} = Colors;

const buttonStyles = css`
  background-color: ${primary_light};
  color: ${black};
  border: .1rem solid ${secondary_dark};

  &:hover {
    background-color: ${primary_dark};
    color: ${secondary_dark};
    border: 0.1rem solid ${secondary_dark};
  }
`;

const invertedButtonStyles = css`
  background-color: ${secondary_light};
  color: ${primary_light};
  border: 0.1rem solid ${primary_light};

  &:hover {
    background-color: ${secondary_dark};
    color: ${primary_dark};
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: ${google_light};
  color: ${white};
  border: none;

  &:hover {
    background-color: ${google_dark};
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.05rem;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
