import AboutHeadingSection from "@/components/About/AboutHeadingSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import MotionWrapper from "@/components/Animations/FramerMotionWrapper";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Founder from "@/components/founder/founder";
import ResponsiveImageGallery from "@/components/gallery/gallery";
import { TeamCarousel } from "@/components/Team/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page Vin core",
};

const AboutPage = () => {
  return (
    <>
      <MotionWrapper>
        <Breadcrumb
          pageName="About Vin Core®"
          description="We love car people! We know all about cars and more."
        />
        <AboutHeadingSection />
        
        {/* Enhanced Founder Section */}
      <Founder/>
      <TeamCarousel/>
      <ResponsiveImageGallery/>
        <AboutSectionOne />
        {/* <AboutSectionTwo /> */}
      </MotionWrapper>
    </>
  );
};

export default AboutPage;