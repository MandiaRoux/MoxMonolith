import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Colors } from "../../theme";

const dash = keyframes`
0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const color = keyframes`
  100%,
  0% {
    stroke: ${Colors.darkGrey};
  }
  40% {
    stroke: ${Colors.grey};
  }
  60% {
    stroke: ${Colors.darkGrey};
  }
  80%,
  90% {
    stroke: ${Colors.primary};
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 90%;
  max-height: 50px;
  width: 100%;
  max-width: 50px;
  ${({ center }) => {
    if (center) {
      return css`
        width: 100%;
        margin: auto;
      `;
    }
    return "";
  }}
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  & > .circular {
    animation: ${rotate} 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  & > .circular > .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${dash} 1.5s ease-in-out infinite,
      ${color} 6s ease-in-out infinite;
    stroke-linecap: round;
  }
`;

const Loader = (center) => {
  return (
    <LoaderContainer center={center}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="circular"
        width="50"
        height="50"
        viewBox="25 25 50 50"
      >
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </svg>
    </LoaderContainer>
  );
};

/** @component */
export default Loader;
