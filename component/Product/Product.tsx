import Image from "next/image";
import React from "react";
import * as Styled from "./Product.styles";
import { IProduct } from "../../sections/Products/Products";

type IProductS = { productList: IProduct[] };

const Product: React.FC<IProductS> = ({ productList }) => {
  return (
    <Styled.Container>
      {" "}
      {productList.map((item: IProduct, i: number) => {
        return (
          <Styled.Card key={i}>
            <Styled.ImageWrapper>
              <Image
                src={item.image}
                layout="responsive"
                width={100}
                height={100}
                alt="product"
              />
            </Styled.ImageWrapper>
            <Styled.Title>{item.title}</Styled.Title>
            <Styled.Description>{item.description}</Styled.Description>
          </Styled.Card>
        );
      })}
    </Styled.Container>
  );
};

export default Product;
