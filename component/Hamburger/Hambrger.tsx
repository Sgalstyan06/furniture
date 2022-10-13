import React, { useState } from "react";
import * as Styled from "./Hamburger.styles";

const Hamburger = () => {
  const [openhamburger, setOpenHamburger] = useState<boolean>(false);

  return (
    <Styled.Hamburger onClick={() => setOpenHamburger((prev) => !prev)}>
      <Styled.HamburgerLine isOpen={openhamburger}></Styled.HamburgerLine>
      <Styled.Line1 isOpen={openhamburger}></Styled.Line1>
      <Styled.Line2 isOpen={openhamburger}></Styled.Line2>
    </Styled.Hamburger>
  );
};
export default Hamburger;
