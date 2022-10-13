import Image from "next/image";
import * as Styled from "./Carousel.styles";
import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./CarouselButton";
import useEmblaCarousel from "embla-carousel-react";
interface ICarousel {
  slides: string[];
}

const Carousel: React.FC<ICarousel> = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: any) => embla && embla.scrollTo(index),
    [embla],
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <Styled.Embla>
        <Styled.EmblaViewport ref={viewportRef}>
          <Styled.EmblaContainer>
            {slides.map((item: string, index: number) => (
              <Styled.EmblaSlide key={index}>
                <Styled.EmblaSlideInner>
                  <Styled.EmblaSlideImg>
                    <Image
                      src={item}
                      layout="fill"
                      objectFit="cover"
                      alt="bar tabel"
                    />
                  </Styled.EmblaSlideImg>
                </Styled.EmblaSlideInner>
              </Styled.EmblaSlide>
            ))}
          </Styled.EmblaContainer>
        </Styled.EmblaViewport>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Styled.Embla>
      {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default Carousel;
