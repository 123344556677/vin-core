import MotionWrapper from '@/components/Animations/FramerMotionWrapper'
import Pricing from '@/components/Pricing'
import { Metadata } from 'next';
import React from 'react'

 export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is Pricing Page for Vin core.",
  // other metadata
};

const PricePage = () => {
  return (
    <div>
      <MotionWrapper>
        <Pricing />
      </MotionWrapper>
    </div>
  )
}

export default PricePage