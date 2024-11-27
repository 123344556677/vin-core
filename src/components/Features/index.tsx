"use client";

import { useInView } from "react-intersection-observer";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 20% of the section is visible
    triggerOnce: false, // Animate only once
  });

  return (
    <section
      id="features"
      ref={ref}
      className={`py-16 md:py-20 lg:py-28 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="container">
        <SectionTitle
          title="Our commitment to you"
          paragraph="Commitment is the foundation of trust, the drive behind perseverance, and the key to achieving greatness."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
