"use client";
import React, { useState } from 'react'
import { showToast } from '../Alerts/Toast';
import { LoginUser } from '@/types/auth';
import { onLogin } from '@/app/api/api';
import { setLocalStorage } from '@/types/common';

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Validate confirmPassword field
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data: LoginUser = {
      email: userDetails.email,
      password: userDetails.password
    }

    const response = await onLogin(data)
      .then((data) => {
        console.log(data, "login response---->")
        showToast({ message: "Login Successful", type: "success" })
        setLocalStorage("token", data?.data?.token);
        setLocalStorage("id", data?.data?._id);
        window.location.href = '/landing';
      })
      .catch((err) => {
        showToast({ message: err?.response?.data?.err, type: "error" })
        console.log(err, "login err---->")
      })

    // Proceed with submission logic
    console.log("Form submitted successfully", userDetails);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleChange}
            value={userDetails.email}
            required
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={handleChange}
            value={userDetails.password}
            required
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="mb-4 sm:mb-0">
            <label
              htmlFor="checkboxLabel"
              className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkboxLabel"
                  className="sr-only"
                  required
                />
                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              Keep me signed in
            </label>
          </div>
          <div>
            <a
              href="#0"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mb-6">
          <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn