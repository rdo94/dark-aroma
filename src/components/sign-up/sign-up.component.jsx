import React from "react";

import { SignUpContainer } from './sign-up.styles';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <form onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={this.handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;