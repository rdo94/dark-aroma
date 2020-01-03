import React from "react";

import { FormInputGroup, Input } from "./form-input.styles";

const FormInput = ({label, handleChange, ...otherProps }) => (
  <FormInputGroup>
    <Input onChange={handleChange} placeholder={label} {...otherProps}/>
  </FormInputGroup>
);

export default FormInput;
