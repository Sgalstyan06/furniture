import React from "react";
import Carousel from "../../component/Carousel/Carousel";
import * as Styled from "./HeroSection.styles";

const heroImageList: string[] = [
  "/hero/hero_1.jpg",
  "/hero/hero_2.jpg",
  "/hero/hero_3.jpg",
  "/hero/hero_4.jpg",
];
const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());
export const HeroSection = () => {
  return (
    <Styled.Container>
      <Carousel
        delay={4000}
        slides={heroImageList}
        options={{
          loop: false,
        }}
        buttons={true}
      />
    </Styled.Container>
  );
};
