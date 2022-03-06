import React from "react";
import {
  Container,
  Wrapper,
  Logo,
  Menu,
  Search,
  InputFlexing,
  Input,
  SearchIcon,
  LeftCorner,
  Video,
  Galery,
  Bell,
  Rasm,
} from "../Navbar/style";
import Person from "../../assets/images/person.png";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu />
        <Logo />
        <InputFlexing>
          <Input type="text" placeholder="search" />
          <SearchIcon />
        </InputFlexing>
        <LeftCorner>
          <Video />
          <Galery />
          <Bell />
          <Rasm src={Person} alt="" />
        </LeftCorner>
      </Wrapper>
      <Search />
    </Container>
  );
};
export default Navbar;
