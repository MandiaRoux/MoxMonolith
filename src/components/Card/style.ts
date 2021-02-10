import styled from "styled-components/macro";
import { Colors } from "../../theme";
import { css } from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  padding: 20px;
  display: inline-flex;
  flex-direction: column;

  margin: 10px;
  box-sizing: border-box;

  height: 450px;
  width: 330px;

  ${(props) => {
    switch (props.colorIdentity) {
      case "W":
        return css`
          background-color: wheat;
        `;
      case "U":
        return css`
          background-color: deepskyblue;
        `;
      case "B":
        return css`
          background-color: gray;
        `;
      case "R":
        return css`
          background-color: red;
        `;
      case "G":
        return css`
          background-color: green;
        `;
      case "GU":
        return css`
          background-color: teal;
        `;
      default:
        return css`
          background-color: ${Colors.white};
        `;
    }
  }}
`;
const Header = styled.div`
  text-align: center;
  display: flex;
  place-content: center;
`;
const Content = styled.div`
  img {
    width: 100%;
  }
`;
const Footer = styled.div``;

export { StyledCard, Header, Content, Footer };
