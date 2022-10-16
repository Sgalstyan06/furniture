import styled from "styled-components";
import { prop } from "styled-tools";

interface IProductList {
  top: string;
}
interface IProducts {
  isOpen: boolean;
}

export const MainContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background: white;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
`;

export const HamburgerLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HamburgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: flex-end;
    padding-left: 20px;
  }
`;
export const Header = styled.div<IProducts>`
  // background: ${prop("theme.color.searchBackgroundColor")};
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  @media screen and (min-width: 1050px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: auto;
  }
`;
export const LinkWrapper = styled.div<IProducts>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
    width: 100%;
    position: absolute;
    top: 160px;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const Contact = styled.div`
  width: 150px;
  text-align: center;
  font-size: 18px;
  border-radius: 2px;
  background: gray;
  line-height: 1.15;
  height: 25px;
  z-index: 2;
  &:hover {
    opacity: 0.8;
  }
  transition: 0.5s;
  @media screen and (max-width: 1050px) {
    width: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;
export const Products = styled(Contact)`
  position: relative;
  z-index: 2;
  &:hover > ul {
    display: block;
  }
  @media screen and (max-width: 768px) {
    &:hover > ul {
      display: none;
    }
  }
`;
export const About = styled(Contact)``;
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
