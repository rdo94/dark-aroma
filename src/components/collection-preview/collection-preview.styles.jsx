import styled from "styled-components";

import { Colors } from "../../data/color";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  .title {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
