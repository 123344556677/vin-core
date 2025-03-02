"use client";
import Image from "next/image"; // Import only if using Next.js

export default function ResponsiveImageGallery() {
  const images = [
    { src: "/images/hero/image1.jpg", alt: "Gallery image 1", gridClasses: "md:col-span-2 md:row-span-2" },
    { src: "/images/hero/image2.jpg", alt: "Gallery image 2", gridClasses: "md:col-span-1 md:row-span-1" },
    { src: "/images/hero/image3.jpg", alt: "Gallery image 3", gridClasses: "md:col-span-1 md:row-span-2" },
    { src: "/images/hero/image4.jpg", alt: "Gallery image 4", gridClasses: "md:col-span-2 md:row-span-1" },
    { src: "/images/hero/image5.jpg", alt: "Gallery image 5", gridClasses: "md:col-span-1 md:row-span-1" },
    { src: "/images/hero/image6.jpg", alt: "Gallery image 6", gridClasses: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Our Gallery
        </h2>
        <p className="text-center text-base text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of stunning images showcasing our work and achievements.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[150px] md:grid-rows-[200px]">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${image.gridClasses}`}>
              {/* Use Next.js Image Component if applicable */}
              <Image
                src={image.src}
                alt={image.alt}
                width={500} // Adjust as needed
                height={500} // Adjust as needed
                className="object-cover object-center w-full h-full transform transition duration-500 hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
