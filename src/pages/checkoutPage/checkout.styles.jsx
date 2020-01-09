import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, secondary_dark, black, white, light_red_1 } = Colors;

export const CheckoutPageContainer = styled.div`
  width: 75%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12rem auto 0;

  button {
    margin-left: auto;
    margin-top: 5rem;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 3.7rem;
  display: flex;
  justify-content: space-between;
  background-color: ${black};
  border-bottom: 3px solid ${primary_light};
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  font-size: 2rem;
  width: 20%;
  color: ${primary_light};

  &:first-child {
    margin-left: 2rem;
  }

  &:nth-child(3) {
    margin-left: 3rem;
  }

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 3rem;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: ${light_red_1};
`;
