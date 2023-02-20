import styled from "styled-components";

export const StyledMainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const StyledProductListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
