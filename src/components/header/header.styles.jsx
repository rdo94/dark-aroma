import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, secondary_dark } = Colors;

export const HeaderContainer = styled.div`
  height: 6rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: ${secondary_light};
`;

export const LogoContainer = styled(Link)`
  height: 70%;
  padding: 1rem;
  background-image: linear-gradient(
    to right,
    ${primary_light},
    ${primary_dark}
  );
  -webkit-background-clip: text;
  color: transparent;

  .logo {
    margin-top: -2.5rem;
    height: 9rem;
    width: 9rem;
  }
`;

export const DivOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
`;

export const DivOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: ${primary_light};

  &:hover {
    background-color: ${primary_dark};
    border: 0.1rem solid ${primary_dark};
    border-radius: 1rem;
    color: ${secondary_dark};
    transform: translateY(-0.2rem) scale(1.05);
    transition: all 0.5s;
  }
`;
