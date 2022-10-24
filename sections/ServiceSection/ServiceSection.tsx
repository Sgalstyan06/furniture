import React, { useState } from "react";
import Carousel from "../../component/Carousel/Carousel";
import * as Styled from "./ServiceSection.styles";

const serviceImage: string[] = [
  "/service/service.jpg",
  "/service/service2.jpg",
  "/service/service3.jpg",
  "/service/service4.jpg",
];

interface IServisesSubDescription {
  title: string;
  description: string;
}

const serviseDescriptions: IServisesSubDescription[] = [
  {
    title: "1. Обсуждение и постановка задачи.",
    description: `На Ваш объект выезжает наш
    дизайнер, с которым Вы можете обсудить стилистику будущей мебели и
    выбрать подходящие материалы. После четкой постановки задачи
    определяются сроки и план работы. Выезд дизайнера и консультация
    проводятся бесплатно.`,
  },
  {
    title: "2. Замеры.",
    description: `Наши специалисты производят все необходимые замеры для
реализации Вашего проекта. Тщательный замер позволяет максимально
эффективно использовать пространство Вашего помещения, выявить его
недостатки и нейтрализовать их.`,
  },

  {
    title: "3. Утверждение проекта.",
    description: `При помощи специальных программ наши
специалисты создают визуализированный проект Вашей мебели. Благодаря
нему Вы сможете четко представить конечный вид мебели и ее
расположение в своем помещении.`,
  },

  {
    title: "4. Изготовление мебели.",
    description: `Мы изготавливаем мебель согласно утвержденному
Вами проекту.`,
  },
  {
    title: "5.Оплата, доставка и монтаж.",
    description: `Работаем по договору. Предоплата-50%
Остальные 50% вы оплачивайте после доставки и установки заказанного
Вами мебели на ваш объект.`,
  },
];

const ServiceSection = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Styled.Container id="service">
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
          Наша главная задача – предоставить Вам качественную мебель в заранее
          оговоренные сроки (по договору). И с этой задачей мы всегда
          справляемся на «отлично» благодаря слаженной работе опытных
          специалистов, современному оборудованию и многолетнему сотрудничеству
          с поставщиками материалов и фурнитуры.
          <Styled.ReadMore onClick={() => setReadMore((prev) => !prev)}>
            Читать даллее
          </Styled.ReadMore>
        </Styled.Description>
      </Styled.CarouselDescriptionWrapper>
      <Styled.ServiceDescriptions readMore={readMore}>
        {serviseDescriptions.map((item, index) => {
          return (
            <Styled.ServiceDescription key={index}>
              <Styled.Title>{item.title}</Styled.Title>
              <Styled.Description>{item.description}</Styled.Description>
            </Styled.ServiceDescription>
          );
        })}
      </Styled.ServiceDescriptions>
    </Styled.Container>
  );
};

export default ServiceSection;
