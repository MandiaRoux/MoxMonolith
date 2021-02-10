import Loader from "./Loader";

import styled, { css, StyledComponent, type } from "styled-components";
import { Colors } from "../../theme";
/**
 * Styling Props options:
 * variant: "primary" | "secondary" | "alternative" | "default" | "clear"
 * size: "sm" | "md" | "lg" | "xl"
 * alignment: "right" | "left" | "center" | "none"
 *
 * noShadow: true | false
 * disabled: true | false
 * isLoading: true |false
 * */

const StyledButton = styled.button`
  padding: 8px 18px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 400;
  border: 0;
  position: relative;
  text-shadow: 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) =>
    props.noShadow
      ? "none"
      : "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"};

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    border-radius: inherit;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    pointer-events: none;
  }

  &:after {
    background: transparent;
    content: "";
    display: inline-block;
    position: absolute;
    border-radius: inherit;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) =>
      props.noShadow
        ? "none"
        : "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"};
    transition: opacity 100ms ease-in-out;
  }

  &:active::after {
    opacity: 0.4;
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: ${Colors.primary};
          color: ${Colors.white};
        `;
      case "secondary":
        return css`
          background-color: ${Colors.secondary};
          color: ${Colors.white};
        `;
      case "clear":
        return css`
          background-color: transparent;
          color: ${Colors.white};
          border: 1px solid ${Colors.white};
          box-shadow: none;
        `;
      case "alternative":
        return css`
          background-color: ${Colors.white};
          color: ${props.theme.primary || Colors.primary};
          border: 1px solid ${Colors.primary};
          box-shadow: none;
        `;
      case "default":
      default:
        return css`
          background-color: ${Colors.coolGrey};
          color: ${Colors.black};
        `;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "sm":
        return css`
          font-size: 0.815rem;
        `;
      case "md":
      default:
        return css`
          font-size: 0.94rem;
        `;
      case "lg":
        return css`
          padding: 8px 26px;
          font-size: 1.2rem;
        `;
      case "xl":
        return css`
          padding: 8px 30px;
          font-size: 1.35rem;
        `;
    }
  }} ${(props) => {
    switch (props.aligned) {
      case "right":
        return css`
          border-top-left-radius: 0px !important;
          border-bottom-left-radius: 0px !important;
          margin-left: 0;
        `;
      case "left":
        return css`
          border-top-right-radius: 0px !important;
          border-bottom-right-radius: 0px !important;
          margin-right: 0;
        `;
      case "center":
        return css`
          border-radius: 0px !important;
          margin-left: 0;
          margin-right: 0;
        `;
      default:
        return "";
    }
  }}
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    background: ${Colors.grey};
    &:hover:enabled:before {
      opacity: 1;
    }
    &:hover:before {
      opacity: 0;
    }
  }
  &:hover:enabled:before {
    opacity: 0.15;
  }
  &:hover:before {
    opacity: 0.15;
  }
  &:hover:active:before {
    opacity: 0.15;
  }
  &:focus {
    outline: 0;
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding: 5px;
  pointer-events: none;
  cursor: pointer;
`;

const AnimatedButton = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  display: inline-block;
  background-color: ${Colors.primary};
  padding: 15px 40px;
`;

const Button = (props) => (
  <StyledButton {...props}>
    {props.children}
    {props.isLoading ? (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    ) : null}
  </StyledButton>
);

Button.defaultProps = {
  size: "md",
  variant: "default",
  aligned: "none",
  noShadow: false,
  isLoading: false,
  disabled: false,
};

/** @component */
export { Button, AnimatedButton };
