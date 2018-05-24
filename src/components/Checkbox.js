import React from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';

const Label = styled.label`
  position: relative
  padding-left: 14px;
  font-size: 18px;

  &::before {
    content: "";
    display: inline-block;
    height: 16px;
    width: 16px;
    border: 1px solid;
    border-radius: 2px;
    position: absolute;
    top: 4px;
    left: -16px;
  }

  &::after {
    content: "";
    display: inline-block;
    height: 8px;
    width: 20px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
    position: absolute;
    top: 2px;
    left: -14px;
  }
`;

const Input = styled.input`
  opacity: 0;

  & + label:after {
    content: none;
  }

  &:checked + label:after {
    content: "";
  }

  &:focus + label:before {
    outline: rgb(59, 153, 252) auto 5px;
  }
`;

const Checkbox = ({ label, isChecked, onChange }) => (
  <div>
    <Input
      type="checkbox"
      id={label}
      value={label}
      checked={isChecked}
      onChange={onChange}
    />
    <Label htmlFor={label}>
      {label}
    </Label>
  </div>
);

Checkbox.propTypes = {
  label: string.isRequired,
  isChecked: bool.isRequired,
  onChange: func.isRequired
};

export default Checkbox;
