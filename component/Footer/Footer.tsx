import Image from "next/image";
import React from "styled-components";
import * as Styled from "./Footer.styles";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Company>
        <Image src={`/logo.png`} width="50px" height="50px" alt="logo" />
        <Styled.Title>MEBELARMPRO</Styled.Title>
        <Styled.Description>Лючшая Компония В Росии</Styled.Description>
      </Styled.Company>
      <Styled.Browse>
        <Styled.Title>Страници</Styled.Title>
        <Styled.Description> Главная</Styled.Description>
        <Styled.Description>О Нас</Styled.Description>
        <Styled.Description> Наши Услги </Styled.Description>
        <Styled.Description> Продукты </Styled.Description>
      </Styled.Browse>
      <Styled.ContactInfo>
        <Styled.Title>Контакты</Styled.Title>
        <Styled.ContactInfoItem>
          {" "}
          <Image
            src="/icons/location.png"
            width="20px"
            height="20px"
            alt="location"
          />{" "}
          Москва
        </Styled.ContactInfoItem>
        <Styled.ContactInfoItem>
          {" "}
          <Image
            src="/icons/email.png"
            width="20px"
            height="20px"
            alt="email"
          />{" "}
          <a href="mailto:karen@mail.ru">karenask@mail.ru</a>
        </Styled.ContactInfoItem>
        <Styled.ContactInfoItem>
          <Image
            src="/icons/phone.png"
            width="20px"
            height="20px"
            alt="phone"
          />{" "}
          <a href="tel:0079257342623">0079257342623</a>
        </Styled.ContactInfoItem>
      </Styled.ContactInfo>
    </Styled.Container>
  );
};

export default Footer;
