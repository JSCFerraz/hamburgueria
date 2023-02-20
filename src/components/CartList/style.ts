import styled from "styled-components"

export const StyledCartList = styled.ul`
    max-width: 100%;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    margin: 1rem 0;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;