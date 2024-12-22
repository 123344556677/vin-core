"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutHeadingSection = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Animate only once
  });
  return (
    <section
      ref={ref}
      className={inView ? "opacity-100 translate-y-0 mb-5" : "opacity-0 translate-y-10 mb-5"
      }>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[700px] lg:pr-8">
              <div className="mb-6">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our team has been developing and delivering quality data products since 2007. We value the fact that millions of customers regularly return to us for reliable answers to their questions.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Located on the shores of the Atlantic in the beautiful city of Boston, our team knows down to a zip code, license plate, and VIN what affects the price and quality of almost every car you see around you nationwide.
                </p>
              </div>
              <div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Vin Core® is the answer to endless questions about car values, safety, history, and possible damages, regardless if you are buying or selling, committing to a long-term loan or lease, or thinking of the future value if you keep the car longer. Vehicle transactions have long been a synonym of asymmetric information between the buyer and seller, the customer and the dealer, the carrier and the insured. We are here to help you fill that gap. We decided that enough is enough! Regardless of your role in that dynamic marketplace, the more you know, the better equipped you are to safeguard your equity, investment, and finances.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative ml-auto lg:flex lg:justify-end">
              <Image
                src="/images/about/title-img-1.jpg"
                alt="about image"
                className="rounded-lg object-cover shadow-xl" // Enhanced shadow
                width={900} // Set a specific width
                height={700} // Set a specific height
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>


  );
};

export default AboutHeadingSection;
