import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors } from "../../data/color";

const {
  primary_light,
  primary_dark,
  secondary_light,
  secondary_dark,
  black,
  white
} = Colors;

export const HeaderContainer = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${black};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 8rem;
  padding: 1rem;
  text-align: center;

  .logo {
    margin-top: -.5rem;
    background-color: transparent;
    border: .5px solid ${primary_light};
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
`;

export const OptionsContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.8rem;
`;

export const OptionLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${primary_light};

  &:hover {
    background-color: ${primary_light};
    border: 0.1rem solid ${primary_light};
    border-radius: 1rem;
    color: ${black};
    transform: translateY(-0.2rem) scale(1.05);
    transition: all 0.5s;
  }
`;
