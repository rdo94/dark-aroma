import styled from 'styled-components';

import { Colors } from '../../data/variables';

//import { FormInput } from '../form-input/form-input.component';
//import { CustomButton } from '../custom-button/custom-button.component';

const { primary_light, primary_dark, secondary_light, black } = Colors;

export const SignInDivs = styled.div`
  width: 38rem;
  height: 40rem;
  display: flex;
  margin: 5rem auto;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${secondary_light};
  border: .1rem solid ${primary_dark};
  border-radius: 1rem;

  h2 {
      color: ${primary_light};
      font-size: 4rem;
  }

`
export const SignInButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
