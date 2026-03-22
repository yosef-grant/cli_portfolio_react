import { styled } from "styled-components";

const CompetencyList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  & li span {
    font-size: .935rem;
    text-align: center;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    & img {
      width: 50px;
    }
  }
`;

export { CompetencyList };
