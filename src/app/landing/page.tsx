import Breadcrumb from '@/components/Common/Breadcrumb';
import Landing from '@/components/Landing/Landing'
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
     
     <Breadcrumb
          pageName="Create Your Report"
          description="You can create 5 Reports per subscription"
        />
      <Landing/>
    </>
  )
}

export default page