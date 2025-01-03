"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { getUser } from "@/app/api/api";
import { UserDetails } from "@/types/auth";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [userData, setUserData] = useState<UserDetails>();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Access localStorage inside useEffect
        // const id = localStorage.getItem("id");
        // console.log(id,"going id in api")

        const response = await getUser();
        console.log(response, "user response--->")
        setUserData(response?.user);

      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const disabled =
  (userData?.subscriptionEndDate &&
    new Date(userData.subscriptionEndDate) > new Date()) &&
  (userData?.availableReports && userData.availableReports > 0);
 
  console.log(disabled, "disabled value")

 

  return (
    <section id="pricing"
      className="relative z-10 py-16 md:py-20 lg:py-28 transition-all duration-1000"
    >
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Vin Core® is an approved NMVTIS data provider. NMVTIS is a national database designed to protect consumers from fraud and unsafe vehicles, to prevent stolen vehicles from being resold, and to provide users with accurate and complete vehicle information."
          center
          width="1200px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <Image
              src="/images/download-11.webp"
              alt="NMVTIS"
              width={200}
              height={200}
            // className="drop-shadow-three dark:hidden dark:drop-shadow-none"
            />

          </div>
        </div>

        <div className="lg:flex  gap-4">
          {/* First PricingBox */}
          <div className="w-full md:w-full lg:w-1/2 mt-2">
            <PricingBox
              packageName="Lite"
              price={"49.99"}
              duration={"mo"}
              subtitle="Get for One-time"
              buttonText="Get Report"
              title="Single Report"
              disabled={disabled}
              id={userData?._id}
            >
              <OfferList text="Ownership History" status="active" />
              <OfferList text="Vehicle Specifications" status="active" />
              <OfferList text="Mileage History" status="active" />
              <OfferList text="Safety Recall Check" status="active" />
              <OfferList text="Title history information" status="inactive" />
              <OfferList text="Junk / Salvage / Insurance records" status="inactive" />
              <OfferList text="Other title brand check" status="inactive" />
              <OfferList text="Sales History" status="inactive" />
              <OfferList text="Vehicle damages" status="inactive" />
              <OfferList text="Market Price Analysis" status="inactive" />
            </PricingBox>
          </div>

          {/* Second PricingBox */}
          <div className="w-full md:w-full lg:w-1/2 mt-2">
            <PricingBox
              packageName="Plus"
              price={"199.99"}
              duration={"yr"}
              subtitle="15 Reports a month"
              buttonText="Get Membership"
              title="Annual Membership"
              disabled={disabled}
              id={userData?._id}
            >
              <OfferList text="Ownership History" status="active" />
              <OfferList text="Vehicle Specifications" status="active" />
              <OfferList text="Mileage History" status="active" />
              <OfferList text="Safety Recall Check" status="active" />
              <OfferList text="Title history information" status="inactive" />
              <OfferList text="Junk / Salvage / Insurance records" status="inactive" />
              <OfferList text="Other title brand check" status="inactive" />
              <OfferList text="Sales History" status="inactive" />
              <OfferList text="Vehicle damages" status="inactive" />
              <OfferList text="Market Price Analysis" status="inactive" />
            </PricingBox>
          </div>
        </div>


      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
