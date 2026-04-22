"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-full">
            <div className="p-10 rounded-xl bg-gray-500">Slide 1</div>
          </div>
          <div className="min-w-full">
            <div className="p-10 rounded-xl bg-gray-500">Slide 2</div>
          </div>
          <div className="min-w-full">
            <div className="p-10 rounded-xl bg-gray-500">Slide 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
