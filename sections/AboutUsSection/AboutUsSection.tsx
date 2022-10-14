import Image from "next/image";
import React from "react";
import * as Styled from "./AboutUsSection.styles";

const AboutUsSection = () => {
  return (
    <Styled.Container>
      <Styled.Title>О нас</Styled.Title>
      <Styled.About>
        <Styled.ImageWrapper>
          <Image
            src="/about/about.jpg"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            alt="about"
          />
        </Styled.ImageWrapper>

        <Styled.Description>
          Магазины Arstilbeko принадлежат ООО Эд-СПО Сеть наших мебельных
          салонов в Армении действует уже 14 лет и предлагает клиентам,
          оценивающим качество, стильную и качественную импортную мебель
          польского, европейского и российского производства
        </Styled.Description>
      </Styled.About>
    </Styled.Container>
  );
};

export default AboutUsSection;
