import { styled } from "styled-components";

const windowGrey = "#c0c7c8";
const taskbarBlue = "#0000a8";

const MainWindow = styled.div`
  height: 80%;
  width: 65%;
  background-color: ${windowGrey};
  z-index: 9999;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px transparent solid;
  font-weight: 400;
  font-style: normal;
  opacity: 0;
  transition: opacity .2s linear;

  &.display {
    opacity: 1;
  }

  & .taskbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background: ${taskbarBlue};
    height: 25px;
    width: 100%;
    padding: 0.25rem;
    cursor: move;
    border-bottom: 1px solid ${windowGrey};
    margin-bottom: 3px;

    &::before {
      content: "";
      height: 1px;
      width: 100%;
      background-color: var(--highlight-grey);
      position: absolute;
      left: 0;
      bottom: -2px;
    }
    &::after {
      content: "";
      height: 1px;
      width: 100%;
      background-color: #fff;
      position: absolute;
      left: 0;
      bottom: -3px;
    }

    h4 {
      color: #fff;
      margin: 0;
      font-size: 1.125rem;
    }

    .controls {
      margin: 0;
      display: flex;
      align-items: center;

      button {
        background: ${windowGrey};
        color: #000;
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
          border-bottom-color: #fff;
          border-right-color: #fff;
          border-left-color: #000;
          border-top-color: #000;
        }
      }
    }
  }
`;

export default MainWindow;
