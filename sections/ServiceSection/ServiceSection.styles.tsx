import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto 100px;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  margin: 20px 0;
  text-align: center;
`;

export const CarouselDescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Description = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
`;
