import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors } from "../../data/variables";

const { primary_light, primary_dark, secondary_light, secondary_dark } = Colors;

export const HeaderContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${secondary_dark};
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 1rem;
  overflow: hidden;

  .logo {
    margin-top: -2rem;
    height: 7rem;
    width: 7rem;
  }
`;

export const DivOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;

  .option {
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color: ${primary_light};
  }
`;
