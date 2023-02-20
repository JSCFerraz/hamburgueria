import styled, { css } from "styled-components";
import { iChildren } from "../interfaces/global";

interface iStyledButton extends iChildren {
  type?: string;
  backgroundImage?: string;
  btnPosition?: string;
  buttonSize?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<iStyledButton>`
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-1);
  padding: 0.5rem 1rem;
  height: 2.5rem;

  ${({ backgroundImage }) => {
    if (backgroundImage) {
      return css`
        background-image: ${(backgroundImage) => `url(${backgroundImage})`};
        background-repeat: no-repeat;
        object-fit: cover;
        color: var(--color-grey-0);
      `;
    }
  }}

  ${({ btnPosition }) => {
    if (btnPosition === "modal") {
      return css`
        position: absolute;
        right: 1rem;
        top: 0.5rem;
      `;
    } else if (btnPosition === "search") {
      return css`
        position: absolute;
        left: 225px;
        top: -0.45rem;
      `;
    } else {
      return null;
    }
  }}

    ${({ buttonSize }) => {
    switch (buttonSize) {
      case "submit":
        return css`
          min-width: 100%;
          padding: 0 1.2rem;
          display: flex;
          justify-content: center;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey-0);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
        `;
      case "closeModal":
        return css`
          width: fit-content;
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey0);

          &:hover {
            color: var(--color-grey-100);
          }
        `;
      case "search":
        return css`
          width: fit-content;
          max-width: 100%;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey0);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            color: var(--color-grey-0);
            background-color: var(--color-primary-50);
            border: 1px solid var(--color-primary-50);
          }
        `;
      case "icon":
        return css`
          width: fit-content;
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey50);
          background-color: transparent;
          z-index: 45;

          &:hover {
            color: var(--color-primary);
          }
        `;
      case "cart":
        return css`
          min-width: 90%;
          height: 3.5rem;
          padding: 0 1.2rem;
          margin: 0 1.5rem;
          display: flex;
          justify-content: center;
          margin: 1rem;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey50);
          background-color: var(--color-grey20);

          &:hover {
            color: var(--color-grey20);
            background-color: var(--color-grey50);
          }
        `;
      case "addToCart":
        return css`
          height: 2.5rem;
          padding: 0 1.2rem;
          margin: 0 1.5rem;
          display: flex;
          justify-content: center;
          margin: 1rem;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey0);
          background-color: var(--color-grey20);

          &:hover {
            color: var(--color-grey0);
            background-color: var(--color-primary);
          }
        `;
      case "counter":
        return css`
          width: 1rem;
          height: 1rem;
          border: none;
          background-color: var(--color-grey20);
          padding: 0.25rem;
          color: var(--color-grey100);
          background-color: var(--color-grey20);
          border-radius: var(--radius-2);
          &:hover {
            background-color: var(--color-grey50);
            color: var(--color-white);
          }
        `;
      default:
        return css`
          display: flex;
          justify-content: center;
          height: 2.75rem;
          padding: 0 2rem;
          font-size: var(--font-size-14);
          color: var(--color-grey0);
          background-color: var(--color-primary);
          &:hover {
            background-color: var(--color-primary-50);
          }
          &:focus {
            background-color: var(--color-primary-50);
          }
        `;
    }
  }}

  ${({ disabled, buttonSize }) => {
    if (
      disabled &&
      (buttonSize === "submit" || buttonSize === "submitUpdate")
    ) {
      return css`
        background-color: var(--color-primary-50);
        border: 1px solid var(--color-primary-50);
        cursor: not-allowed;
      `;
    } else if (
      !disabled &&
      (buttonSize === "submit" || buttonSize === "submitUpdate")
    ) {
      return css`
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);

        &:hover {
          background-color: var(--color-primary-50);
          border: 1px solid var(--color-primary-50);
          cursor: pointer;
        }
      `;
    }
  }}
`;
