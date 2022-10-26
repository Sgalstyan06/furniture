import styled from "styled-components";

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
  font-size: 24px;
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
`;

export const Description = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  margin-top: 10px;
`;

export const ImageWrapper = styled.div`
  margin: 5px auto 0;
  &:hover {
    transform: scale(1.2);
  }
  transition: 2s ease-in-out;
`;
