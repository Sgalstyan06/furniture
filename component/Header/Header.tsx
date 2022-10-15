import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../Hamburger/Hambrger";
import Search from "../Search/Search";
import * as Styled from "./Header.styles";

const producdAssortment = [
  {
    name: "Барние Стойки",
  },
  {
    name: "спалня",
  },
];

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  return (
    <Styled.MainContainer id="header">
      <Styled.HamburgerLogoWrapper>
        <Image src="/logo.png" width="100px" height="100px" alt="logo" />
        <Styled.HamburgerWrapper
          onClick={() => setOpenHamburger((prev) => !prev)}
        >
          <Hamburger />
        </Styled.HamburgerWrapper>
      </Styled.HamburgerLogoWrapper>
      <Styled.Header isOpen={openHamburger}>
        <Styled.LinkWrapper isOpen={openHamburger}>
          <Styled.Products>
            <Link href="#products">продукты</Link>
            <Styled.ListAssortimantProducts className="main-list-product">
              {producdAssortment.map((item, i) => {
                return (
                  <Styled.ProductAssortiment key={i}>
                    {item.name}
                  </Styled.ProductAssortiment>
                );
              })}
            </Styled.ListAssortimantProducts>
          </Styled.Products>
          <Styled.Contact> контакты</Styled.Contact>
          <Styled.About>
            {" "}
            <Link href="#aboutUs">о нас</Link>
          </Styled.About>
        </Styled.LinkWrapper>
        <Search />
      </Styled.Header>
    </Styled.MainContainer>
  );
};

export default Header;
