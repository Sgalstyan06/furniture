import styled from "styled-components";

interface IHmaburgerLineProps {
  isOpen: boolean;
}

export const Hamburger = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
  width: 25px;
  height: 20px;
`;
export const HamburgerLine = styled.div<IHmaburgerLineProps>`
  position: absolute;
  width: 25px;
  height: 2px;
  top: 1px;
  left: 0;
  background: black;
  transition: all 0.5s ease-in-out;
  ${(props) => (props.isOpen ? "top: 10px; transform: rotate(45deg);" : "")}
`;
export const Line1 = styled(HamburgerLine)`
  top: 9px;
  ${(props) => (props.isOpen ? "transform: translateX(-50px);height: 0;" : "")}
`;
export const Line2 = styled(HamburgerLine)`
  top: 17px;
  ${(props) => (props.isOpen ? "top: 10px; transform: rotate(-45deg);" : "")}
`;
