import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, secondary_light, black, white } = Colors;

export const CollectionItemContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  max-height: 60%;
  margin-bottom: 1rem;

  .collection-image {
     max-width: 50%;
  }
`;

export const ItemDescription = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  border: .2rem solid ${secondary_light};
  background-color: ${black};
  border-radius: .8rem;
  color: ${primary_light};
  padding: 1rem 2rem;

  .name {
      text-transform: uppercase;
      font-size: 1.6rem;
      display: block;
  }

  .price {
      font-size: 1.4rem;
      display: block;
  }
`;
