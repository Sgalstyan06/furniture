import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../Hamburger/Hambrger";
import * as Styled from "./Header.styles";

const menuItems = [
  {
    content: "Продукты",
    path: "#products",
    width: "92px",
    left: "15px",
  },
  {
    content: "О Нас",
    path: "#aboutUs",
    width: "60px",
    left: "30px",
  },
  {
    content: "Наши Услуги",
    path: "#service",
    width: "126px",
    left: "-3px",
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
        <Image src="/mebelarmpro.png" width="120px" height="60px" alt="logo" />
      </Styled.LogoWrapper>

      <Styled.HamburgerWrapper
        onClick={() => setOpenHamburger((prev) => !prev)}
      >
        <Hamburger changeStatusHamburgerButton={changeStatusHamburgerButton} />
      </Styled.HamburgerWrapper>
      <Styled.Header>
        <Styled.LinkWrapper isOpen={openHamburger}>
          {menuItems.map((item, i) => {
            return (
              <Link key={i} href={item.path}>
                <Styled.LinkItem
                  left={item.left}
                  size={item.width}
                  onClick={hamburgerButtonChange}
                >
                  {item.content}
                </Styled.LinkItem>
              </Link>
            );
          })}
        </Styled.LinkWrapper>
      </Styled.Header>
      <Styled.ContactInfo>
        <a href="tel:0079257342623">0079257342623</a>
        <Styled.TelegramWrapper>
          <Link href="https://t.me/mebel_armpro">
            <Image
              src="/icons/telegram.png"
              width="25px"
              height="25px"
              alt="telegram"
            />
          </Link>
        </Styled.TelegramWrapper>
      </Styled.ContactInfo>
    </Styled.MainContainer>
  );
};

export default Header;
