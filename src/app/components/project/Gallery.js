import Image from "next/image";

export function Gallery({ Images }) {
  return (
    <div className="grid grid-cols-4 gap-4 w-full mt-6">
      {Images.map((item, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl">
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
  );
}
