import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  width: 350px;
  margin: 10px 0;

  & .loading-outer {
    width: 100%;
    height: 22px;
    border: 2px solid rgb(158, 158, 158);

    & .loading-inner {
      background: rgb(158, 158, 158);
      height: 100%;
      width: 0;
    }
  }
`;

const AnimatedLoadingBar = styled.div<{ $percentage: number }>`
  width: 100%;
  height: 22px;
  border: 2px solid rgb(158, 158, 158);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) ${(props) => props.$percentage}%,
    rgba(0, 0, 0, 1) ${(props) => props.$percentage}%
  ); 
}
`;
export { LoadingWrapper, AnimatedLoadingBar };
