import styled from "styled-components";

const windowGrey = "#c0c7c8";
const TaskbarButton = styled.button`
  background: ${windowGrey};
  min-height: 90%;
  font-size: 10px;
  width: 16px;
  height: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-top-color: #fff;
  border-left-color: #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  position: relative;
  font-weight: bold;
  
  &:active {
    border-top-color: #000;
    border-left-color: #000;
    border-right-color: #fff;
    border-bottom-color: #fff;
    
  }
`;

const MaximiseIcon = styled.span`

width: 12px;
height: 14px;
border-top-width: 2px;
border: 1px solid black;

`

export {TaskbarButton, MaximiseIcon };
