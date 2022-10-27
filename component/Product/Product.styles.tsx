import styled from "styled-components";
import { prop } from "styled-tools";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;

export const Card = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-size: ${prop("theme.fontSize.md")};
  font-weight: ${prop("theme.fontWeight.lg")};
  line-height: ${prop("theme.lineHeight")};
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.h2`
  font-size: ${prop("theme.fontSize.sm")};
  font-weight: ${prop("theme.fontWeight.md")};
  line-height: ${prop("theme.lineHeight")};
  text-align: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  margin: 5px auto 0;
  &:hover {
    transform: scale(1.2);
  }
  transition: 2s ease-in-out;
`;
