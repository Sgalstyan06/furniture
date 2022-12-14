import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./CarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import * as Styled from "./Carousel.styles";
import { height } from "@mui/system";

type Options = {
  loop: boolean;
};

interface ICarousel {
  delay: number;
  slides: string[];
  options: Options;
  buttons: boolean;
}

const Carousel: React.FC<ICarousel> = ({
  delay,
  slides,
  options = { loop: false },
  buttons,
}) => {
  const autoplay = useRef(Autoplay({ delay, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <Styled.Embla>
      <Styled.EmblaViewport ref={emblaRef}>
        <Styled.EmblaContainer>
          {slides.map((item: string, index: number) => (
            <Styled.EmblaSlide key={index}>
              <Styled.EmblaSlideInner>
                <Styled.EmblaSlideImg>
                  <Image
                    src={item}
                    layout="fill"
                    objectFit="cover"
                    alt="A cool cat."
                  />
                </Styled.EmblaSlideImg>
              </Styled.EmblaSlideInner>
            </Styled.EmblaSlide>
          ))}
        </Styled.EmblaContainer>
      </Styled.EmblaViewport>
      {buttons && (
        <>
          {" "}
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </>
      )}
    </Styled.Embla>
  );
};

export default Carousel;
