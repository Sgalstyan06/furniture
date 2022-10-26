import styled from "styled-components";
import { prop } from "styled-tools";

export const Container = styled.div`
  padding: 60px 0;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 15px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding-left: 40px;
    justify-items: start;
  }
`;
export const Company = styled.div``;
export const Title = styled.h1`
  font-size: ${prop("theme.fontSize.sm")};
  font-weight: ${prop("theme.fontWeight.md")};
  line-height: ${prop("theme.lineHeight")};
  margin-bottom: 10px;
`;
export const Description = styled.h2`
  font-size: ${prop("theme.fontSize.xs")};
  font-weight: ${prop("theme.fontWeight.xs")};
  line-height: ${prop("theme.lineHeight")};
`;
export const Browse = styled.div``;

export const ContactInfo = styled.div``;

export const ContactInfoItem = styled.div`
  margin-bottom: 3px;
  font-size: ${prop("theme.fontSize.xs")};
  font-weight: ${prop("theme.fontWeight.xs")};
  line-height: ${prop("theme.lineHeight")};
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const LogoWrapper = styled.div`
  width: 120px;
  height: 60px;
`;
