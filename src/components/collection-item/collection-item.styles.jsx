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
  width: 80%;
  height: 70%;

  .collection-image {
    border: 1px solid ${primary_light};
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const ItemDescription = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${secondary_light};
  background-color: ${black};
  border-radius: 0.8rem;
  color: ${primary_light};
  padding: 1rem 2rem;

  .name {
    text-transform: uppercase;
    font-size: 1.7rem;
    display: block;
  }

  .price {
    font-size: 1.4rem;
    display: block;
  }
`;
