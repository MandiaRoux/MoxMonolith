import styled from "styled-components";

/**
 * Styling Props options:
 * uppercase:  true | false
 * */

const StyledText = styled.p`
  font-size: 16px;
  display: inline-block;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

const Text = (props) => <StyledText {...props}>{props.children}</StyledText>;

/** @component */
export default Text;
