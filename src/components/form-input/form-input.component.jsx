import React from "react";

import { FormInputGroup, Input, Label } from "./form-input.styles";

const FormInput = ({label, handleChange, ...otherProps }) => (
  <FormInputGroup>
    <Input onChange={handleChange} placeholder={label} {...otherProps} />
    <Label className='input-label'>{label}</Label>
  </FormInputGroup>
);

export default FormInput;
