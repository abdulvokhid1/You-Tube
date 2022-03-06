import styled from "styled-components";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as video } from "../../assets/icons/video.svg";
import { ReactComponent as galery } from "../../assets/icons/galery.svg";
import { ReactComponent as bell } from "../../assets/icons/bell.svg";

export const Container = styled.div`
  text-align: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #212121;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 27px;
  align-items: center;
  text-align: center;
`;

export const Menu = styled(menu)`
  margin-top: 30px;
`;
export const Logo = styled(logo)`
  margin-top: 30px;
  margin-left: 27px;
`;

export const InputFlexing = styled.div`
  display: flex;
  width: 40%;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  margin: auto;
  margin-top: 18px;
  /* text-align: center;
  align-items: center; */
`;

export const Search = styled.div`
  height: 50px;
  width: 1269px;
  margin-top: 13px;
  background: #212121;
  margin-left: 250px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Input = styled.input`
  width: 90%;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px 0px 0px 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.2);
`;

export const SearchIcon = styled(search)`
  margin: auto;
`;

export const LeftCorner = styled.div`
  display: flex;
  margin: 15px 15px;
  align-items: center;
  text-align: center;
  margin-right: 60px;
  margin-top: 20px;
`;

export const Video = styled(video)`
  margin-left: 30px;
`;
export const Galery = styled(galery)`
  margin-left: 30px;
`;
export const Bell = styled(bell)`
  margin-left: 30px;
`;
// export const Person = styled(person)``;

export const Rasm = styled.img`
  margin-left: 25px;
`;
