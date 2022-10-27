import styled from "styled-components";
import { prop } from "styled-tools";

export const Container = styled.div`
  padding: 0 20px;
`;
export const Title = styled.h1`
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    font-size: ${prop("theme.fontSize.lg")};
  }
`;
