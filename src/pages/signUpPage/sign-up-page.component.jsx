import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";

import { SignUpPageContainer, SignInBox, SignInBtn } from './sign-up-page.styles';

const SignUpPage = () => (
  <SignUpPageContainer>
    <SignUp />
    <SignInBox>
      <h2>Already have an account?</h2>
      <SignInBtn to="/login">
        Sign In
      </SignInBtn>
    </SignInBox>
  </SignUpPageContainer>
);

export default SignUpPage;
