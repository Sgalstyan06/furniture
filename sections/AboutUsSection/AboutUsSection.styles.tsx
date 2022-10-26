import styled from "styled-components";
import { prop } from "styled-tools";

export const Container = styled.div`
  margin: 100px 30px;
  @media screen and (max-width: 768px) {
    margin: 50px 0;
    max-width: 327px;
    margin: 50px auto;
  }
`;
export const ImageWrapper = styled.div``;
export const About = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.h1`
  font-size: ${prop("theme.fontSize.xl")};
  font-weight: ${prop("theme.fontWeight.xl")};
  line-height: ${prop("theme.lineHeight")};
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: ${prop("theme.fontSize.lg")};
  }
`;
export const Description = styled.h2`
  font-size: ${prop("theme.fontSize.md")};
  font-weight: ${prop("theme.fontWeight.sm")};
  line-height: ${prop("theme.lineHeight")};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
