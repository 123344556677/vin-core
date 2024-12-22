import AboutHeadingSection from "@/components/About/AboutHeadingSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import MotionWrapper from "@/components/Animations/FramerMotionWrapper";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page Vin core",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <MotionWrapper>
        <Breadcrumb
          pageName="About Vin Core®."
          description="We love car people! We know all about cars and more."
        />
        <AboutHeadingSection />
        <div className="max-w-4xl mx-auto my-3 p-8 border-2 bg-white dark:border-blue-500 rounded-lg dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 shadow-lg text-black dark:text-white" style={{marginTop:"150px"}}>
          <div className="flex items-center space-x-6">
            <img
              src="/images/blog/blog-01.jpg"
              alt="Founder"
              className="w-32 h-32 rounded-full border-4 border-blue-300"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-400">Message from Our Founder</h2>
              <p className="mt-4 dark:text-gray-300 text-gray-900">
                "Welcome to our platform! We are committed to providing you with the best experience and
                unparalleled services. Thank you for being part of our journey."
              </p>
              <p className="mt-2 text-sm font-medium text-gray-400">- Bryan Muller, Founder</p>
            </div>
          </div>
        </div>
        <AboutSectionOne />
      </MotionWrapper>
    </>
  );
};

export default AboutPage;
