import MotionWrapper from '@/components/Animations/FramerMotionWrapper';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Landing from '@/components/Landing/Landing'
import Orders from '@/components/orders/orders';
import Settings from '@/components/Settings/Settings';
import SubscriptionCancel from '@/components/Settings/SubscriptionCancel';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Landing Page",
  description: "This is Landing Page for Vin core.",
  // other metadata
};

const page = () => {

  return (
    <>
    <MotionWrapper>
      <Breadcrumb
        pageName="Order History -VinCore"
        description="View and manage your order history. Track current orders, 
        review past purchases, and access detailed order information 
        including status, tracking, and transaction details."
      />
      <section className="relative z-10 overflow-hidden pb-16 pt-20 md:pb-20 lg:pb-15">
      <Orders/>
      <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      </MotionWrapper>
      
    </>
  )
}

export default page