'use client'

import AboutHeadingSection from "@/components/About/AboutHeadingSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import MotionWrapper from "@/components/Animations/FramerMotionWrapper";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PaymentCard from "@/components/Payment/PaymentCards";
import { Country, State } from "country-state-city";

import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Billing Page",
//   description: "This is Billing Page Vin core",
//   // other metadata
// };

const BillingInfoPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("stripe");
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.isoCode === e.target.value);
    setSelectedCountry(country);
    setStates(State.getStatesOfCountry(country?.isoCode));
    setSelectedState(null);
  };

  return (
    <>
      <MotionWrapper>
        <Breadcrumb
          pageName="Billing Details"
          description="We love car people! We know all about cars and more."
        />
        <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Select Payment Method</h2>
          <PaymentCard
            title="Stripe"
            description="Pay securely with Stripe"
            icon="💳"
            selected={selectedPayment === "stripe"}
            onSelect={() => setSelectedPayment("stripe")}
          />
          <PaymentCard
            title="PayPal"
            description="Pay using PayPal"
            icon="🅿️"
            selected={selectedPayment === "paypal"}
            onSelect={() => setSelectedPayment("paypal")}
          />
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="vin"
              placeholder="Enter VIN (17 digits)"
              maxLength={17}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
            <input
              type="text"
              name="licensePlate"
              placeholder="License Plate Number"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
            <div>
              <label htmlFor="country" className="block mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                onChange={handleCountryChange}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block mb-2">
                State
              </label>
              <select
                id="state"
                name="state"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                disabled={!selectedCountry}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              name="address"
              placeholder="Full Address"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Town/City"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
      </MotionWrapper>
    </>
  );
};

export default BillingInfoPage;
