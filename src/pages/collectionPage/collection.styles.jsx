import styled from 'styled-components';

import { Colors } from '../../data/color';

const { black } = Colors;

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  color: ${black};
  font-size: 3.8rem;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  > * {
    margin-bottom: 3rem;
  }
`;
