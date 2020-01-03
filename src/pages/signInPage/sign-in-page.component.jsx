import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";

import { SignInPageContainer, SignUpBox, SignUpButton } from './sign-in-page.styles';

const SignInPage = () => (
  <SignInPageContainer style={{
    backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/HD-free-coffee-wallpaper-768x480.jpg)',
    backgroundSize: 'cover'
  }}>
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
