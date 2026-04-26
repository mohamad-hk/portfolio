"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function Gallery({ Images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      Autoplay({
        delay: 3000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mx-auto mt-6 w-full max-w-3xl px-3 sm:mt-10 sm:px-4">
      <div
        className="overflow-hidden rounded-xl shadow-lg sm:rounded-2xl"
        ref={emblaRef}
      >
        <div className="flex">
          {Images.map((item, index) => (
            <div
              key={index}
              className="relative min-w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] bg-slate-100"
            >
              <Image
                src={`/images/${item.image_link}`}
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 896px"
                className="object-contain md:object-cover"
                alt={item.description || "slider image"}
              />

              {item.description && (
                <p
                  className="absolute bottom-3 left-1/2 max-w-[80%] -translate-x-1/2 
              truncate rounded-full bg-black/45 px-3 py-1 text-center text-[11px] 
              text-white backdrop-blur sm:bottom-4 sm:text-xs"
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end gap-2 sm:right-5">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "h-6 bg-blue-900"
                : "h-2 bg-blue-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
