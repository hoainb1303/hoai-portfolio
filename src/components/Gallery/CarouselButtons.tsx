import { useCallback } from "react";

//TYPES
import { EmblaCarouselType } from "embla-carousel";
type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    console.log("click");
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    console.log("click");
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({
  onPrevButtonClick,
}: {
  onPrevButtonClick: () => void;
}) => {
  return (
    <button type="button" onClick={onPrevButtonClick}>
      PrevButton
    </button>
  );
};
export const NextButton = ({
  onNextButtonClick,
}: {
  onNextButtonClick: () => void;
}) => {
  return (
    <button type="button" onClick={onNextButtonClick}>
      NextButton
    </button>
  );
};
