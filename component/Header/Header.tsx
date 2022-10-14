import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "../Hamburger/Hambrger";
import Search from "../Search/Search";
import * as Styled from "./Header.styles";

const producdAssortment = [
  {
    name: "Барние Стойки",
    // top: "5px",
    // products: ["table", "chair", "capboard"],
  },
  {
    name: "спалня",
    //  top: "30px", products: ["bad", "mirrow", "carpet"]
  },
];

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  return (
    <Styled.MainContainer>
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
            продукты
            <Styled.ListAssortimantProducts className="main-list-product">
              {producdAssortment.map((item, i) => {
                return (
                  <Styled.ProductAssortiment key={i}>
                    {item.name}
                    {/* {item?.products && (
                      <Styled.ProductList top={item.top}>
                        {item.products.map((product, i) => {
                          return (
                            <Styled.Product key={i}>{product}</Styled.Product>
                          );
                        })}
                      </Styled.ProductList>
                    )} */}
                  </Styled.ProductAssortiment>
                );
              })}
            </Styled.ListAssortimantProducts>
          </Styled.Products>
          <Styled.Contact>контакты</Styled.Contact>
          <Styled.About>о нас</Styled.About>
        </Styled.LinkWrapper>
        <Search />
      </Styled.Header>
    </Styled.MainContainer>
  );
};

export default Header;
