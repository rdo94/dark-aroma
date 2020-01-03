import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, secondary_dark } = Colors;

export const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingHeaderContainer = styled.div`
  .header {
    font-size: 10rem;
    color: $color-secondary-dark;
  }

  .details {
    font-size: 4rem;
    color: $color-secondary-light;
  }
`;

export const LandingButtonContainer = styled.div`
  height: rem;
  width: 40rem;
  padding: 2.5rem;
  margin-top: 10rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;

  background-color: ${secondary_light};
  border: 1px solid ${primary_light};
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.4rem rgba(black, 0.2);
  color: ${primary_light};

  &:hover {
    color: ${primary_dark};
    background-color: ${secondary_dark};
    border: 2px solid ${primary_dark};
    border-radius: 1rem;
    box-shadow: 0.2rem 0.2rem 0.4rem rgba(black, 0.2);
  }
`;

export const LandingButton = styled(Link)`
  color: ${primary_light};

  .shop-text {
    height: 80%;
    font-size: 3rem;
  }

  .shop-arrow {
    font-size: 3rem;
  }
`;
