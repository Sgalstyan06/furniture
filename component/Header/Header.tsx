import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../Hamburger/Hambrger";
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
  const [changeStatusHamburgerButton, setChangeStatusHamburgerButton] =
    useState(false);
  function hamburgerButtonChange() {
    setOpenHamburger((prev) => !prev);
    setChangeStatusHamburgerButton((prev) => !prev);
  }
  return (
    <Styled.MainContainer id="header">
      <Styled.LogoWrapper>
        <Image
          src="/mebelarmpro.png"
          // layout="fill"
          // objectFit="cover"
          width="120px"
          height="60px"
          alt="logo"
        />
        <Styled.HamburgerWrapper
          onClick={() => setOpenHamburger((prev) => !prev)}
        >
          <Hamburger
            changeStatusHamburgerButton={changeStatusHamburgerButton}
          />
        </Styled.HamburgerWrapper>
      </Styled.LogoWrapper>
      <Styled.Header>
        <Styled.LinkWrapper isOpen={openHamburger}>
          <Styled.Products onClick={hamburgerButtonChange}>
            <Link href="#products">продукты</Link>
            <Styled.ListAssortimantProducts>
              {producdAssortment.map((item, i) => {
                return (
                  <Styled.ProductAssortiment key={i}>
                    {item.name}
                  </Styled.ProductAssortiment>
                );
              })}
            </Styled.ListAssortimantProducts>
          </Styled.Products>
          <Styled.LinkItem onClick={hamburgerButtonChange}>
            {" "}
            контакты
          </Styled.LinkItem>
          <Styled.LinkItem onClick={hamburgerButtonChange}>
            {" "}
            <Link href="#aboutUs">о нас</Link>
          </Styled.LinkItem>
          <Link href="#service">
            <Styled.LinkItem onClick={hamburgerButtonChange}>
              Наши Услуги
            </Styled.LinkItem>
          </Link>
        </Styled.LinkWrapper>
      </Styled.Header>
    </Styled.MainContainer>
  );
};

export default Header;
