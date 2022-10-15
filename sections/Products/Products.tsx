import React from "react";
import Product from "../../component/Product/Product";
import * as Styled from "./Products.styles";

export interface IProduct {
  title: string;
  image: string;
  description: string;
}

const productList: IProduct[] = [
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_1.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_2.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_3.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_4.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_5.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_6.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_7.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_8.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
  {
    title: "Кофейная стойка самообслуживания",
    image: "/products/product_9.jpg",
    description:
      "Изготавливаем под заказ Срок изготовления: 7-8 календарных дней",
  },
];

const Products = () => {
  return (
    <Styled.Container id="products">
      <Styled.Title>ПРОДУКТЫ</Styled.Title>
      <Product productList={productList} />
    </Styled.Container>
  );
};

export default Products;
