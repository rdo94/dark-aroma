import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";

import { SignInPageContainer, SignUpBox, SignUpButton } from './sign-in-page.styles';

const SignInPage = () => (
  <SignInPageContainer>
    <SignIn />
    <SignUpBox>
      <h2>Don't have an account?</h2>
      <SignUpButton to="/register">
        Sign Up
      </SignUpButton>
    </SignUpBox>
  </SignInPageContainer>
);

export default SignInPage;
