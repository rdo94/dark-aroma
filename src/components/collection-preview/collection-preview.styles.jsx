import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, black } = Colors;

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  padding: 1rem;
`;

export const CollectionPreviewTitle = styled.h1`
  color: ${black};
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
`

export const CollectionPreviewItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
