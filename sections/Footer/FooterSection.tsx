import Image from "next/image";
import React from "react";
import Footer from "../../component/Footer/Footer";
import * as Styled from "./FooterSection.styles";

const FooterSection = () => {
  return (
    <Styled.Container>
      <Footer />
      <Styled.Author>
        <Styled.AuthorInfoItem>
          <Image
            src={"/icons/copyRight.png"}
            width="15px"
            height="15px"
            alt="copyRight"
          />{" "}
          CopyRight 2022
        </Styled.AuthorInfoItem>{" "}
        mebelarmpro.ru
      </Styled.Author>
    </Styled.Container>
  );
};

export default FooterSection;
