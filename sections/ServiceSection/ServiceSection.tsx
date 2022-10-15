import React from "react";
import Carousel from "../../component/Carousel/Carousel";
import * as Styled from "./ServiceSection.styles";

const serviceImage: string[] = [
  "/service/service.jpg",
  "/service/service2.jpg",
  "/service/service3.jpg",
  "/service/service4.jpg",
];

const ServiceSection = () => {
  return (
    <Styled.Container>
      <Styled.Title id="service">Услуги</Styled.Title>
      <Styled.Subtitle> Качесво. Надежность. Результат</Styled.Subtitle>
      <Styled.CarouselDescriptionWrapper>
        <Carousel
          delay={3000}
          slides={serviceImage}
          options={{
            loop: false,
          }}
          buttons={false}
        />
        <Styled.Description>
          Кофейние стойки самообслуживания Изготим кофейные стойки
          самообслуживания для вашего успешного бизнеса в короткие сроки! По
          вашему желанию можем изготовить стойку под ключ и вы получите уже
          готовую к эксплуатации стойку. Наши сотрудники полностью настроят и
          подключат оборуование (все необходимое оборудование у нас в наличии
          всегда). Средний срок изготовления кофейной с самообсуживания под ключ
          15 дней.
        </Styled.Description>
      </Styled.CarouselDescriptionWrapper>
    </Styled.Container>
  );
};

export default ServiceSection;
