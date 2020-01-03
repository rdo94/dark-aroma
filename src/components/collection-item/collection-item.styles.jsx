import styled from "styled-components";

import { Colors } from "../../data/color";

const { primary_light, secondary_light } = Colors;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  height: 70%;
  margin: 0 auto;

  .collection-image {
     max-width: 70%;
     max-height: 70%;
  }
`;

export const ItemDescription = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  border: .2rem solid ${secondary_light};
  background-color: ${primary_light};
  border-radius: .8rem;

  .name {
      text-transform: uppercase;
      width: 80%;
      margin-bottom: 1.5rem;
  }

  .price {
      width: 20%;
  }
`;
