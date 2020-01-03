import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";

import { SignUpPageContainer, SignInBox, SignInBtn } from './sign-up-page.styles';

const SignUpPage = () => (
  <SignUpPageContainer style={{
    backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/HD-free-coffee-wallpaper-768x480.jpg)',
    backgroundSize: 'cover'
  }}>
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
