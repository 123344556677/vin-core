"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import MotionWrapper from "@/components/Animations/FramerMotionWrapper";
import { Metadata } from "next";

//  export const metadata: Metadata = {
//   title: "FAQ Page",
//   description: "This is FAQ Page for Vin core.",
//   // other metadata
// };

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What is a car performance report?",
      answer:
        "A car performance report provides detailed insights into various aspects of a vehicle's performance, including speed, fuel efficiency, engine health, and more.",
    },
    {
      question: "How can I access my car's performance report?",
      answer:
        "You can access your car's performance report by connecting your vehicle's data to our platform via an onboard diagnostics (OBD) device or compatible app integration.",
    },
    {
      question: "What data is included in a performance report?",
      answer:
        "The report includes data like fuel efficiency, mileage, speed trends, engine performance, tire pressure, and maintenance alerts.",
    },
    {
      question: "Can I track multiple cars with your platform?",
      answer:
        "Yes, you can track multiple vehicles on our platform. Each vehicle will have its own performance report and history.",
    },
    {
      question: "Is the data in the performance report accurate?",
      answer:
        "Yes, the data is gathered directly from your vehicle's sensors and diagnostic systems, ensuring accuracy and reliability.",
    },
    {
      question: "How often is the performance data updated?",
      answer:
        "Performance data is updated in real-time as long as your vehicle is connected to the platform via an OBD device or app.",
    },
    {
      question: "Do I need special equipment to use the platform?",
      answer:
        "You may need an OBD-II device to connect your vehicle to the platform. Modern vehicles may also allow direct app connectivity without additional hardware.",
    },
    {
      question: "Can I share my car's performance report with others?",
      answer:
        "Yes, you can share your car's performance report with mechanics, buyers, or insurance providers through our secure sharing options.",
    },
  ];


  return (
    <MotionWrapper>
      <section id="faq" className="py-16 md:py-20 lg:py-28">
        <div className="container border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 mb-4">
          <SectionTitle
            title="Frequently Asked Questions"
            paragraph="Get to know what people asked us the most."
            center
            width="800px"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-6 py-5 bg-white text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition duration-300 ease-in-out"
                >
                  {item.question}
                  <span>
                    {activeIndex === index ? (
                      <FiChevronUp className="text-gray-600 text-xl" />
                    ) : (
                      <FiChevronDown className="text-gray-600 text-xl" />
                    )}
                  </span>
                </button>
                <div
                  className={`px-6 py-5 bg-gray-50 text-gray-600 text-base rounded-b-xl transition-all duration-500 ease-in-out delay-150 ${activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="flex justify-center space-x-8 mb-8 mt-5 ">
          <span className="text-lg font-semibold cursor-pointer hover:text-white text-body-color dark:text-body-color-dark">
            All
          </span>

          <span className="text-lg font-semibold text-body-color cursor-pointer dark:text-body-color-dark">
            New
          </span>
          <span className="text-lg font-semibold text-body-color cursor-pointer dark:text-body-color-dark">
            Used
          </span>
        </div>

        {/* Search bar */}
        <div className="flex justify-center mb-5">
          <div className="relative w-[700px]">
            <input
              type="text"
              placeholder="Search for VIN here..."
              className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 pr-14 text-base text-body-color placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white hover:bg-primary/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default FAQ;
