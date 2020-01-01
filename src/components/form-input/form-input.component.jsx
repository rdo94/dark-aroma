import React from "react";

import { FormInputGroup, Input } from "./form-input.styles";

const FormInput = ({label, handleChange }) => (
  <FormInputGroup>
    <Input onChange={handleChange} placeholder={label} />
  </FormInputGroup>
);

export default FormInput;
