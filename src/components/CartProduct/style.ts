import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  min-width: 300px;
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-1);
  padding-right: 1rem;

  & > img {
    width: 4rem;
    height: 4rem;
    height: auto;
    background-color: var(--color-grey20);
    border-radius: var(--radius-1);
    object-fit: contain;
    margin-left: 1rem;
  }

  & > h3 {
    margin: 0 1rem;
  }
  & > p {
    margin: 0 1rem;
  }
  & > span {
    margin: 0 1rem;
  }
  & > button {
    margin-top: 0.5rem;
    padding: 0;
    border-radius: none;
  }
`;

export const StyledProductDetails = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const StyledQuantity = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
