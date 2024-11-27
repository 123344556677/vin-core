import MotionWrapper from "@/components/Animations/FramerMotionWrapper";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for Vin core",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <MotionWrapper>
        <Breadcrumb
          pageName="Contact Us"
          description="Use Vin Core® best-in-class Vehicle History Reports to quickly look up a vehicle by VIN number or license plate. Find title records, auto specs, accidents and damage history, problem checks, pricing, and more information."
        />

        <Contact />
      </MotionWrapper>
    </>
  );
};

export default ContactPage;
