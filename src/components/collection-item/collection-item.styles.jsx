import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, secondary_light } = Colors;

export const CollectionItemContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: .5rem;
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
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  border: .2rem solid ${secondary_light};
  background-color: ${primary_light};
  border-radius: .8rem;

  .name {
      text-transform: uppercase;
      width: 90%;
  }

  .price {
      width: 10%;
  }
`;
