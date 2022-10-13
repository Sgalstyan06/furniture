import React from "react";
import Header from "../component/Header/Header";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import * as Styled from "./MainContainer.styles";

const MainContainer = () => {
  return (
    <Styled.MainContainer>
      <Header />
      <HeroSection />
    </Styled.MainContainer>
  );
};
export default MainContainer;
