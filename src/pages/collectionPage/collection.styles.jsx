import styled from 'styled-components';

import { Colors } from '../../data/color';

const { black } = Colors;

export const CollectionPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 15rem 0;
  padding: 1rem 2rem;
`;

export const CollectionTitle = styled.h2`
  color: ${black};
  font-size: 3rem;
`;

export const CollectionItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
