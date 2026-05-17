"use client";

import { useState } from "react";
import Image from "next/image";

export function Gallery({ Images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const preloadImage = (imageLink) => {
    const img = new window.Image();
    img.src = `/images/images-projects/${imageLink}`;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-6">
        {Images.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => preloadImage(item.image_link)}
            onClick={() => setSelectedImage(item)}
            className="group relative overflow-hidden rounded-2xl cursor-zoom-in"
          >
            <Image
              src={`/images/images-projects/${item.image_link}`}
              width={300}
              height={400}
              alt={item.description || "Project image"}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {item.description && (
              <div
                className="
                  absolute inset-0 flex items-center justify-center
                  bg-black/50 px-4
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              >
                <p
                  className="
                    max-w-[90%] translate-y-4 rounded-full
                    px-4 py-2 text-center text-base text-white
                    transition-transform duration-300
                    group-hover:translate-y-0
                  "
                >
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed inset-0 z-50 flex items-center justify-center
            bg-black/80 p-4 cursor-zoom-out
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-[90vw]"
          >
            <img
              src={`/images/images-projects/${selectedImage.image_link}`}
              alt={selectedImage.description || "Project image"}
              className="max-h-[70vh] max-w-[70vw] rounded-2xl object-contain"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center
                rounded-full bg-white text-xl font-bold text-black shadow-lg
                hover:bg-gray-200
              "
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
