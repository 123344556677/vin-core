"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  XMarkIcon as TwitterIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

export function TeamCarousel() {
  // Team member data
  const teamMembers = [
    {
      name: "John Carter",
      position: "CEO & Co-Founder",
      description:
        "20+ years in automotive data analytics and business strategy.",
      image: "/images/hero/team2.jpg",
    },
    {
      name: "Emily Zhang",
      position: "Chief Data Scientist",
      description:
        "Expert in machine learning and predictive analytics for vehicle history reports.",
      image: "/images/hero/team1.jpg",
    },
    {
      name: "Michael O'Connor",
      position: "VP of Operations",
      description:
        "Leads our operations team to deliver seamless and timely car reports to customers worldwide.",
      image: "/images/hero/team3.jpg",
    },
    {
      name: "Sarah Patel",
      position: "Head of Customer Experience",
      description:
        "Dedicated to ensuring our customers have the best experience.",
      image: "/images/hero/team4.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section updated to match the gallery style */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Executive Leadership
          </h2>
          <p className="text-center text-base text-body-color dark:text-gray-300 mb-12">
            Meet the experts behind our industry-leading car report platform.
          </p>
        </div>

        {/* Carousel Container with explicit height */}
        <div className="relative h-[500px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-full w-full"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image & Overlay */}
                  <div className="relative overflow-hidden rounded-xl aspect-square mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-blue-200">{member.position}</p>
                    </div>
                  </div>
                  {/* Description & Social Icons */}
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkIcon className="w-6 h-6" />
                        <span className="text-xs mt-1">LinkedIn</span>
                      </a>
                      <a
                        href="#"
                        className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <TwitterIcon className="w-6 h-6" />
                        <span className="text-xs mt-1">Twitter</span>
                      </a>
                      <a
                        href="#"
                        className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="Email"
                      >
                        <EnvelopeIcon className="w-6 h-6" />
                        <span className="text-xs mt-1">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <button
              className="team-prev absolute left-2 top-1/2 -translate-y-1/2 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </button>
            <button
              className="team-next absolute right-2 top-1/2 -translate-y-1/2 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
