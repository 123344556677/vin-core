"use client";

export default function ResponsiveImageGallery() {
  // Define an array of image data with custom grid span classes
  const images = [
    {
      src: "/images/hero/image1.jpg",
      alt: "Gallery image 1",
      gridClasses: "md:col-span-2 md:row-span-2", // Large image
    },
    {
      src: "/images/hero/image2.jpg",
      alt: "Gallery image 2",
      gridClasses: "md:col-span-1 md:row-span-1", // Small image
    },
    {
      src: "/images/hero/image3.jpg",
      alt: "Gallery image 3",
      gridClasses: "md:col-span-1 md:row-span-2", // Tall image
    },
    {
      src: "/images/hero/image4.jpg",
      alt: "Gallery image 4",
      gridClasses: "md:col-span-2 md:row-span-1", // Wide image
    },
    {
      src: "/images/hero/image5.jpg",
      alt: "Gallery image 5",
      gridClasses: "md:col-span-1 md:row-span-1", // Small image
    },
    {
      src: "/images/hero/image6.jpg",
      alt: "Gallery image 6",
      gridClasses: "md:col-span-1 md:row-span-1", // Small image
    },
    // Add more images as needed
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Our Gallery
        </h2>
        {/* Subline */}
        <p className="text-center text-base text-body-color dark:text-gray-300 mb-12">
          Explore our collection of stunning images showcasing our work and
          achievements.
        </p>
        {/* 
          The grid uses:
          - grid-cols-1 on small screens (single column)
          - md:grid-cols-4 on medium and larger screens (4 columns)
          - gap-6 for spacing between grid items
          - auto-rows to set a base row height (adjust as needed)
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl ${image.gridClasses}`} // Increased border radius
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transform transition duration-500 hover:scale-105"
              />
              {/* Optional: Add an overlay or caption */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}