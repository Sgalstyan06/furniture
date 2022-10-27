import styled from "styled-components";
import { prop } from "styled-tools";

interface ISubDescription {
  readMore: boolean;
}

export const Container = styled.div`
  width: 80%;
  margin: 0 auto 100px;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: ${prop("theme.fontSize.xl")};
  font-weight: ${prop("theme.fontWeight.xl")};
  line-height: ${prop("theme.lineHeight")};
  @media screen and (max-width: 768px) {
    font-size: ${prop("theme.fontSize.lg")};
  }
`;
export const Subtitle = styled.h2`
  font-size: ${prop("theme.fontSize.md")};
  font-weight: ${prop("theme.fontWeight.md")};
  line-height: ${prop("theme.lineHeight")};
  margin-bottom: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CarouselDescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 320px;
  }
`;

export const Description = styled.h2`
  font-size: ${prop("theme.fontSize.sm")};
  font-weight: ${prop("theme.fontWeight.sm")};
  line-height: ${prop("theme.lineHeight")};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ReadMore = styled.button`
  display: inline;
  text-align: start;
  border: none;
  font-weight: ${prop("theme.fontWeight.lg")};
  color: gray;
  background: white;
  &: hover {
    color: black;
  }
`;
export const ServiceDescriptions = styled.div<ISubDescription>`
  display: ${(props) => (props.readMore ? "block" : "none")};
`;
export const ServiceDescription = styled.div`
  h1 {
    font-size: ${prop("theme.fontSize.sm")};
    font-weight: ${prop("theme.fontWeight.md")};
    line-height: ${prop("theme.lineHeight")};
    text-align: start;
    margin: 10px;
  }
`;
