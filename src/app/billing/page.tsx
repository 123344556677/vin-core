import MotionWrapper from "@/components/Animations/FramerMotionWrapper";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import BillingInfo from "@/components/Billing/billing";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Billing Page",
  description: "This is Billing Page for Vin core.",
  // other metadata
};

const BillingInfoPage = () => {


  return (
    <>
      <MotionWrapper>
        <Breadcrumb
          pageName="Billing Details"
          description="We love car people! We know all about cars and more."
        />
        <Suspense fallback={<div>Loading...</div>}>
          <BillingInfo />
        </Suspense>
      </MotionWrapper>
    </>
  );
};

export default BillingInfoPage;
