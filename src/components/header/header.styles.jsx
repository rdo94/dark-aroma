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
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${black};
`;

export const LogoContainer = styled(Link)`
  height: 90%;
  width: 5%;
  padding: 0.5rem;
  ${'' /* background-color: ${primary_light}; */}
  text-align: center;
`;

export const Logo = styled.div`
  margin-top: -2.5rem;
  height: 9rem;
  width: 9rem;
`;

export const OptionsContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
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
