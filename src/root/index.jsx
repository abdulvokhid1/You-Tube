import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import { Container, Wrapper } from "./style";

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <Body />
      </Wrapper>
    </Container>
  );
};
export default Root;
