import React from "react";

import Header from "../component/Header/Header";
import AboutUsSection from "../sections/AboutUsSection/AboutUsSection";
import FooterSection from "../sections/Footer/FooterSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import Products from "../sections/Products/Products";
import ServiceSection from "../sections/ServiceSection/ServiceSection";
import * as Styled from "./MainContainer.styles";

const MainContainer = () => {
  return (
    <Styled.MainContainer>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <Products />
      <ServiceSection />
      <FooterSection />
    </Styled.MainContainer>
  );
};
export default MainContainer;
