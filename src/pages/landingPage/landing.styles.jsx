import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, secondary_light, secondary_dark } = Colors;

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const LandingHeaderContainer = styled.div`
  height: 30%;
`;

export const LandingHeaderTitle = styled.h1`
  width: 100%;
  height: 60%;
  font-size: 8rem;
  color: ${secondary_dark};
`;

export const LandingHeaderSubtitle = styled.span`
  width: 100%;
  height: 40%;
  font-size: 3rem;
  color: ${secondary_light};
`;
