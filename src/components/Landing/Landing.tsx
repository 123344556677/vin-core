"use client";

import React, { useEffect, useState } from 'react'
import MotionWrapper from '../Animations/FramerMotionWrapper'
import Breadcrumb from '../Common/Breadcrumb'
import { BillingDetails } from '@/types/billing';
import { Country, State } from "country-state-city";
import { getUser, order } from '@/app/api/api';
import { showToast } from '../Alerts/Toast';
import { UserDetails } from '@/types/auth';
import Pricing from '../Pricing';
import Banner from '../Banner/Banner';

const Landing = () => {
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [states, setStates] = useState([]);
  const [userData, setUserData] = useState<UserDetails>();
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    vin: "",
    licensePlateNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: {
      country: "",
      state: "",
      fullAddress: "",
      city: "",
      zipCode: "",
    },
    paymentMethod: "Subscription",
    orderType: "Subscription",
    amount: 200,
  });
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find((c) => c.isoCode === e.target.value);
    setSelectedCountry(selectedCountry);
    setBillingDetails((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        country: selectedCountry?.name || "",
        state: "",
      },
    }));
    setStates(State.getStatesOfCountry(selectedCountry?.isoCode || ""));
    // setSelectedState(null);
  };

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


  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateName =
      states.find((state) => state.isoCode === e.target.value)?.name || "";
    setBillingDetails((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        state: stateName,
      },
    }));
    setSelectedState(stateName);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => {
      if (name in prev.address) {
        return {
          ...prev,
          address: {
            ...prev.address,
            [name]: value,
          },
        };
      }
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await order(billingDetails)
      .then(async (data) => {
        console.log(data, "order response------>");
        showToast({
          message: data?.message,
          type: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        showToast({ message: err?.response?.data?.err, type: "error" });
      });
    console.log(response, "api response--->");
    // console.log("Billing Details:", billingDetails);
    // Send billingDetails to API
  }
  return (
    <>
      <MotionWrapper>
        {userData?.subscriptionEndDate && new Date(userData.subscriptionEndDate) < new Date() ? (
          <>
            <Banner text="Please update your subscription or generate a one-time report for your vehicle reports" />
            <Pricing />
          </>
        ) : (userData?.subscriptionEndDate && userData?.availableReports < 1) ? (
          <>
            <Banner text="Your Reports per Subscription have been completed. Please update your subscription!" />
            <Pricing />
          </>
        ) : (
          <>
            {userData?.availableReports > 0 ?
              <>
                <Banner text={`You have ${userData?.availableReports} reports left or this subcription!`} />

                <div className="container mx-auto p-8">
                  <div className=''>
                    <h2 className="mb-4 text-2xl font-bold">Enter Your Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="vin"
                        placeholder="Enter VIN (17 digits)"
                        maxLength={17}
                        value={billingDetails.vin}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <input
                        type="text"
                        name="licensePlateNumber"
                        placeholder="License Plate Number"
                        value={billingDetails.licensePlateNumber}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={billingDetails.firstName}
                          onChange={handleChange}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={billingDetails.lastName}
                          onChange={handleChange}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={billingDetails.email}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={billingDetails.phoneNumber}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <div>
                        <label htmlFor="country" className="mb-2 block">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          // value={selectedCountry}
                          onChange={handleCountryChange}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
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
                        <label htmlFor="state" className="mb-2 block">
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          // value={selectedState}
                          onChange={handleStateChange}
                          disabled={!selectedCountry}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
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
                        name="fullAddress"
                        placeholder="Full Address"
                        value={billingDetails.address.fullAddress}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <input
                        type="text"
                        name="city"
                        placeholder="Town/City"
                        value={billingDetails.address.city}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={billingDetails.address.zipCode}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full rounded-md bg-primary py-3 text-white"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </>
              :
              <Pricing />
            }
          </>
        )}



      </MotionWrapper>
    </>
  )
}

export default Landing