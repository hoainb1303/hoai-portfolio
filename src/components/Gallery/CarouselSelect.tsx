"use client";
import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

const CarouselSelect = () => {
  return <div>CarouselSelect</div>;
};

type UseCarouselSelectType = {
  selectedIndex: number;
  scrollSnaps: number[];
  selectItem: (index: number) => void;
};

export const useCarouselSelect = (
  emblaApi: EmblaCarouselType | undefined,
): UseCarouselSelectType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const selectItem = useCallback(
    (index: number) => {
      if (!emblaApi) return emblaApi!.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    //scrollSnapList return a list of number of jump between selected Item and other items.
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    //this method return the selected index of the carousel
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    selectItem,
  };
};
