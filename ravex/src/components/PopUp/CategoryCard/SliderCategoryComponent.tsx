import { useRef } from "react";
import type { SliderCategoryComponentProps } from "../../../types/components";

const SliderCategoryComponent = (props: SliderCategoryComponentProps) => {
  const { children } = props;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      container.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onWheel={handleWheel}
      className="slider-scroll flex w-full items-stretch gap-3 overflow-x-auto p-4 scroll-smooth touch-pan-x snap-x snap-mandatory"
    >
      {children}
    </div>
  );
};

export default SliderCategoryComponent;
