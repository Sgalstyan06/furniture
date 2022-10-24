import React, { useState, useEffect } from "react";
import * as Styled from "./Hamburger.styles";

interface IHamburger {
  changeStatusHamburgerButton: boolean;
}

const Hamburger: React.FC<IHamburger> = ({ changeStatusHamburgerButton }) => {
  const [openhamburger, setOpenHamburger] = useState<boolean>(false);
  useEffect(() => {
    setOpenHamburger(false);
  }, [changeStatusHamburgerButton]);

  return (
    <Styled.Hamburger onClick={() => setOpenHamburger((prev) => !prev)}>
      <Styled.HamburgerLine isOpen={openhamburger}></Styled.HamburgerLine>
      <Styled.Line1 isOpen={openhamburger}></Styled.Line1>
      <Styled.Line2 isOpen={openhamburger}></Styled.Line2>
    </Styled.Hamburger>
  );
};
export default Hamburger;
