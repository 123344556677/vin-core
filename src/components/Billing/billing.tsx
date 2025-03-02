"use client";

import PaymentCard from "@/components/Payment/PaymentCards";
import { BillingDetails } from "@/types/billing";
import { Country, State } from "country-state-city";
import { useRouter, useSearchParams } from "next/navigation";

// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { order, paypalSingleOrder, stripeSingleOrder, stripeSubscriptionOrder } from "../../app/api/api";
import { showToast } from "@/components/Alerts/Toast";

const BillingInfo = () => {
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
    paymentMethod: "Stripe",
    orderType: "",
    amount: 100,
  });

  const [selectedPayment, setSelectedPayment] = useState("Stripe");
  const [ordderId, setOrderId] = useState<string>("");
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [states, setStates] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  useEffect(() => {
    if (plan) {
      setBillingDetails((prev) => ({
        ...prev,
        orderType:
          plan === "single"
            ? "One-time"
            : plan === "annual"
              ? "Subscription"
              : "",
      }));
    }
  }, [plan]);

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

  const handlePaymentMethodChange = (method: string) => {
    console.log(method, "payment method---->");
    setSelectedPayment(method);
    setBillingDetails((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

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
          message: "Your order is pending, please make payment",
          type: "success",
        });
        setOrderId(data?.order?._id);
        if (data?.order?.paymentMethod === "Stripe") {
          if(data?.order?.orderType==="One-time"){
          const stripeResponse = await stripeSingleOrder(data?.order?._id);
          window.location.href = stripeResponse?.url;
          console.log(stripeResponse, "stripe response url------>");
          }
          else{
          const stripeResponse = await stripeSubscriptionOrder(data?.order?._id);
          window.location.href = stripeResponse?.url;
          console.log(stripeResponse, "stripe response url------>");
          }
        } else if (data?.order?.paymentMethod === "PayPal") {
          const paypalResponse = await paypalSingleOrder(data?.order?._id);
          window.location.href = paypalResponse?.url;
          console.log(paypalResponse, "paypal response url------>");
        }
      })
      .catch((err) => {
        console.log(err);
        showToast({ message: err?.response?.data?.err, type: "error" });
      });
    console.log(response, "api response--->");
    // console.log("Billing Details:", billingDetails);
    // Send billingDetails to API
  };

  return (
    <>
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Select Payment Method</h2>
              <PaymentCard
                title="Stripe"
                description="Pay securely with Stripe"
                icon="💳"
                selected={selectedPayment === "Stripe"}
                onSelect={() => handlePaymentMethodChange("Stripe")}
              />
              <PaymentCard
                title="PayPal"
                description="Pay using PayPal"
                icon="🅿️"
                selected={selectedPayment === "PayPal"}
                onSelect={() => handlePaymentMethodChange("PayPal")}
              />
            </div>

            {/* Right Column */}
            <div>
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
        </div>
    </>
  );
};

export default BillingInfo;
