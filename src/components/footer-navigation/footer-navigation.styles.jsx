import styled from "styled-components";

import { Colors } from "../../data/color";

const {
    primary_light,
    black,
    white,
    google_light,
    facebook_primary,
    instagram_primary,
    twitter_primary,
    twitter_secondary
} = Colors;

export const FooterNavigationContainer = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  height: 30%;
`;

export const FooterNavigationGroup = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;

export const FooterNavigationLink = styled.li`
  a {
    text-decoration: none;
    font-size: 2rem;
  }

  .facebook-icon {
      color: ${facebook_primary};
  }

  .instagram-icon {
      color: ${instagram_primary};
  }

  .twitter-icon {
      color: ${twitter_primary};
  }

  .github-icon {
      color: ${white};
  }

  .google-icon {
    color: ${google_light};
  }
`;
