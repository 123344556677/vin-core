"use client";

import { getUser, onUpateInfo } from "@/app/api/api";
import React, { useEffect, useState } from "react";
import { showToast } from "../Alerts/Toast";
import SubscriptionCancel from "./SubscriptionCancel";
// import { getUser, updateUser } from "../api/userApi"; // Import your API functions

const Settings = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    subscription:null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUser();
        if (response?.user) {
          setUserData({
            fname: response.user.fname || "",
            lname: response.user.lname || "",
            email: response.user.email || "",
            subscription: response.user.subscription || null,
          });
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await onUpateInfo(userData); // Call API to update user info
      console.log(response, "update response----->");
      showToast({
        message: response?.message,
        type: "success",
      });

    } catch (err) {
      console.error("Error updating user information:", err);
      showToast({ message: err?.response?.data?.err, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="container border-b ">
      <form onSubmit={handleSubmit} className="space-y-6 mb-5">
        <div>
          <label
            htmlFor="fname"
            className="mb-2 block text-sm text-dark dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            name="fname"
            placeholder="Enter your first name"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            onChange={handleChange}
            value={userData.fname}
            required
          />
        </div>

        <div>
          <label
            htmlFor="lname"
            className="mb-2 block text-sm text-dark dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            placeholder="Enter your last name"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            onChange={handleChange}
            value={userData.lname}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm text-dark dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            onChange={handleChange}
            value={userData.email}
            required
          />
        </div>

        <button
          type="submit"
          className={`flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark ${isSubmitting ? "cursor-not-allowed opacity-50" : ""
            }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
    <div>
      {
      //   userData?.subscription&&
      // <SubscriptionCancel/>
}
    </div>
    </>
  );
};

export default Settings;
