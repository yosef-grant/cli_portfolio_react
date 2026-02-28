import { styled } from "styled-components";

const CommandLineInput = styled.form`
  display: flex;
  flex-direction: row;

  & input {
    width: 100%;
    border: none;
    outline: none;
    caret-shape: block;
  }
`;

export { CommandLineInput };
