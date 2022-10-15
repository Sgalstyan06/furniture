import styled from "styled-components";
import { ifProp } from "styled-tools";

interface ILeftProps {
  left: boolean;
}

export const Embla = styled.div`
  position: relative;
  background-color: #f7f7f7;
  width: 100%;
  height: inherit;
  margin-left: auto;
  margin-right: auto;
`;
export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
export const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
  height: 100%;
`;
export const EmblaSlide = styled.div`
  position: relative;
  min-width: 100%;
  padding-left: 10px;
`;

export const EmblaSlideInner = styled.div`
  position: relative;
  overflow: hidden;
  height: 190px;
  height: 100%;
`;
export const EmblaSlideImg = styled.div`
  height: 100%;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  transform: translate(-50%, -50%);
`;

export const Emblabutton = styled.button<ILeftProps>`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;
  ${ifProp({ left: true }, "left: 27px", "right: 27px")}
`;

//   .embla__button:disabled {
//     cursor: default;
//     opacity: 0.3;
//   }

export const EmblaButtonSvg = styled.svg`
  width: 100%;
  height: 100%;
`;
