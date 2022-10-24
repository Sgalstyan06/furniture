import styled from "styled-components";

interface ISubDescription {
  readMore: boolean;
}

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
  gap: 10px;
  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 320px;
  }
`;

export const Description = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
`;

export const ReadMore = styled.button`
  display: inline;
  text-align: start;
  border: none;
  font-weight: 600;
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
    font-size: 20px;
    font-weight: 600;
    line-height: 1.25;
    text-align: start;
    margin: 10px;
  }
`;
