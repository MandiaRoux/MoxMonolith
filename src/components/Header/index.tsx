import React from "react";
import { StyledHeader } from "./style";
import { Button, Text } from "../Basic";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {" "}
      <Text uppercase>Mox Monolith</Text>
      <Button variant={"clear"} aligned={"right"}>
        Login
      </Button>
      {children}
    </StyledHeader>
  );
};

export { Header };
