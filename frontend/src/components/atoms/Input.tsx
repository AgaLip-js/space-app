import React from "react";
import styled from "styled-components";
import { AtomEnums } from "../../enums/atomEnums";
import { InputProps } from "../../interfaces/atomsInterface";

const StyledInput = styled.input<{secondary: string}>`
  outline: none;
  display: block;
  background: ${({ theme, secondary }) => secondary ? theme.greyBackground : theme.whiteBackground};
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: ${({ theme }) => theme.primaryBackground};
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.font500};
  line-height: inherit;
  transition: 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.primaryLightBackground};
    }
`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  margin-top: 10px;
  color: ${({ theme }) => theme.primaryBackground};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.font500};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
const StyledTextArea = styled.textarea`
  outline: none;
  display: block;
  background: ${({ theme }) => theme.whiteBackground};
  width: 90%;
  height:50vh;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: ${({ theme }) => theme.whiteBackground};
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.font500};
  line-height: inherit;
  transition: 0.3s ease;
`;

const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  onChange,
  onBlur,
  value,
  title,
  secondary,
  required,
  textarea,
  placeholder,
}) => (
  textarea ? (
    <>
      <StyledTextArea
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        required={required}
      />
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
    </>
  ) : (
    <>
      <StyledInput
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        secondary={secondary || ''}
        required={required}
        placeholder={placeholder}
        autoComplete='off'
      />
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
    </>
  )
);

export default Input;
