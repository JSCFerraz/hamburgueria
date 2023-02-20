import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 250px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid var(--color-grey20);
  border-radius: var(--radius-1);
  background-color: var(--color-white);

  &:hover {
    border: 1px solid var(--color-primary);

    & > button {
      background-color: var(--color-primary);
    }
  }

  & > img {
    width: 99%;
    max-height: 150px;
    min-width: 248px;
    max-width: 100%;
    height: auto;
    background-color: var(--color-grey0);
    object-fit: contain;
    padding-bottom: 1rem;
    border-radius: var(--radius-1) var(--radius-1) 0 0;
  }

  & > div > h3 {
    margin: 0 1rem;
  }
  & > div > p {
    margin: 0 1rem;
  }
  & > div > span {
    margin: 0 1rem;
  }

  & > button {
    margin: 0 1rem;
    background-color: var(--color-grey50);

    :hover {
      background-color: var(--color-primary-50);
    }
  }
`;
