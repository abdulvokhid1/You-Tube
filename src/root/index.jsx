import React from "react";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container, Wrapper } from "../root/style";

export const Root = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Body />
      </Wrapper>
    </Container>
  );
};
export default Root;
