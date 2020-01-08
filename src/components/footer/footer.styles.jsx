import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, primary_dark, black, white } = Colors;

export const FooterContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${black};
`;

export const FooterCopyright = styled.div`
  p {
    color: ${primary_light};
    font-size: 1.5rem;
    height: 80%;
    width: 100%;
    padding: 1rem 3rem;
    text-align: center;
  }
`;
