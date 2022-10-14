import styled from "styled-components";

interface IHmaburgerLineProps {
  isOpen: boolean;
}

export const Hamburger = styled.div`
  position: relative;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 19px;
`;
export const HamburgerLine = styled.div<IHmaburgerLineProps>`
  position: absolute;
  width: 25px;
  height: 2px;
  top: 0;
  left: 0;
  background: black;
  ${(props) => (props.isOpen ? "top: 9px; transform: rotate(45deg);" : "")}
`;
export const Line1 = styled(HamburgerLine)`
  top: 9px;
  ${(props) => (props.isOpen ? "display:none;" : "")}
`;
export const Line2 = styled(HamburgerLine)`
  top: 17px;
  ${(props) => (props.isOpen ? "top: 9px; transform: rotate(-45deg);" : "")}
`;