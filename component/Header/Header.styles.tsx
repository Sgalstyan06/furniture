import styled from "styled-components";
import { prop } from "styled-tools";

interface IProductList {
  top: string;
}
interface IProducts {
  isOpen: boolean;
}

interface ISize {
  size: string;
  left: string;
}

export const MainContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background: white;
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
`;
export const HamburgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: grid;
    justify-content: flex-end;
    padding-left: 20px;
  }
`;
export const Header = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  @media screen and (min-width: 1050px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const LinkWrapper = styled.div<IProducts>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.isOpen
        ? "transform: translateX(40%); -webkit-transform: translateX(40%);"
        : "transform: translateX(100%); -webkit-transform: translateX(100%);"};
    display: block;
    padding: 20px;
    width: 100%;
    height: calc(100vh - 160px);
    background: white;
    position: fixed;
    top: 70px;
    transition: all 0.5s ease-in-out;
  }
`;
export const LinkItem = styled.div<ISize>`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  word-spacing: 5px;
  border-radius: 2px;
  color: black;
  line-height: 1.15;
  height: 25px;
  z-index: 2;
  cursor: pointer;
  opacity: 0.8;

  &: after {
    content: "";
    position: absolute;
    background: black;
    height: 2px;
    width: 0px;
    left: ${prop("left")};
    bottom: -5px;
    transition: all 0.5s;
  }
  &:hover&:after {
    width: ${prop("size")};
  }
  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
    margin-top: 10px;
    &:after {
      left: 0;
    }
  }
`;
export const ListAssortimantProducts = styled.ul`
  color: black;
  display: none;
  position: absolute;
  left: 0;
  top: 25px;
  list-style: none;
`;
export const ProductAssortiment = styled.li`
  width: 150px;
  height: 25px;
  font-size: 16px;
  line-height: 1.2;
  text-align: start;
  padding-left: 5px;
  background: #d3d3d3;
  &: hover >ul {
    display: block;
  }
  &:hover {
    background: gray;
  }
  @media screen and (max-width: 1050px) {
    width: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;
export const ProductList = styled.ul<IProductList>`
  display: none;
  list-style: none;
  position: absolute;
  top: ${prop("top")};
  left: 150px;
  @media screen and (max-width: 1050px) {
    left: 120px;
  }
  @media screen and (max-width: 768px) {
    top: 50px;
  }
`;
export const Product = styled.li`
  width: 150px;
  height: 25px;
  background: #d3d3d3;
  &:hover {
    background: gray;
  }
  @media screen and (max-width: 1050px) {
    width: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const ContactInfo = styled.div`
  position: absolute;
  top: 18px;
  right: 50px;
  display: grid;
  grid-template-columns: 1fr 30px;
  justify-items: start;
  align-items: center;
  gap: 5px;
  a {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    opacity: 0.8;
    transition: all 0.5s ease-in-out;
    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  }
  img {
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 768px) {
    right: auto;
    left: 40%;
  }
`;

export const TelegramWrapper = styled.div`
  cursor: pointer;
  height: 25px;
`;
