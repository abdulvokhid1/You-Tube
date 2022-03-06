import React from "react";
import { list, list1, list2, list3 } from "../../mock/sidebar";
// import { Wrapper } from "../../Sidebar/style";
import { Container, Wrapper, Icons, Title, Hey, Word } from "../Sidebar/style";

export const Sidebar = () => {
  return (
    <Container>
      {list.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Icons src={value.icon} alt="rasm" />
            <Title>{value.title}</Title>
          </Wrapper>
        );
      })}
      <Hey></Hey>
      {list1.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Icons src={value.icon} alt="rasm" />
            <Title>{value.title}</Title>
          </Wrapper>
        );
      })}
      <Hey />
      {list2.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Icons src={value.icon} alt="rasm" />
            <Title>{value.title}</Title>
          </Wrapper>
        );
      })}
      <Hey />
      <Word>YOUTUBE’DEN DAHA FAZLA İÇERİK</Word>
      {list3.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Icons src={value.icon} alt="rasm" />
            <Title>{value.title}</Title>
          </Wrapper>
        );
      })}
    </Container>
  );
};
export default Sidebar;
