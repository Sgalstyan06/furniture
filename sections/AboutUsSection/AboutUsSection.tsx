import Image from "next/image";
import React from "react";
import * as Styled from "./AboutUsSection.styles";

const AboutUsSection = () => {
  return (
    <Styled.Container id="aboutUs">
      <Styled.Title>О нас</Styled.Title>
      <Styled.About>
        <Styled.ImageWrapper>
          <Image
            src="/about/about.jpg"
            width={327}
            height={300}
            // layout="responsive"
            // objectFit="cover"
            alt="about"
          />
        </Styled.ImageWrapper>

        <Styled.Description>
          Производим мебель для Вашего успешного бизнеса на заказ, по
          индивидуальным размерам. В максимально сжатые сроки мы сможем
          реализовать Ваши самые смелые идеи, эффективно используя каждый
          метр пространства.
          <hr />
          Собственное производство в Москве. Работаем с 2016-ого года. Более
          1100 реализованных проектов по всей России.
        </Styled.Description>
      </Styled.About>
    </Styled.Container>
  );
};

export default AboutUsSection;
