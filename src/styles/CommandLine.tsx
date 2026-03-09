import { styled } from "styled-components";

const CommandLineInput = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  & input {
    padding-left: .25rem;
    width: 100%;
    border: none;
    outline: none;
    caret-shape: block;
    background-color: #000;
  }
`;

export { CommandLineInput };
