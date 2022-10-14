import React from "react";
import Header from "../component/Header/Header";
import AboutUsSection from "../sections/AboutUsSection/AboutUsSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import * as Styled from "./MainContainer.styles";

const MainContainer = () => {
  return (
    <Styled.MainContainer>
      <Header />
      <HeroSection />
      <AboutUsSection />
    </Styled.MainContainer>
  );
};
export default MainContainer;
