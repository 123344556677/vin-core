'use client';

import { onSignUp } from '@/app/api/api';
import { SignupUser } from '@/types/auth';
import React, { useState } from 'react'
import { showToast } from '../Alerts/Toast';

const SignUp = () => {

  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Final validation before submitting
    if (userDetails.password !== userDetails.confirmPassword) {
      showToast({ message: "Passwords do not match", type: "error" })
      return;
    }
    const data: SignupUser = {
      fname: userDetails.fname,
      lname: userDetails.lname,
      email: userDetails.email,
      password: userDetails.password
    }

    const response = await onSignUp(data)
      .then((data) => {
        console.log(data, "signup response---->")
        showToast({ message: "Signup Successful", type: "success" })
        window.location.href = '/signin';
      })
      .catch((err) => {
        showToast({ message: err?.response?.data?.err, type: "error" })
        console.log(err, "signup err---->")
      })

    // Proceed with submission logic
    console.log("Form submitted successfully", userDetails);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            {" "}
            First Name{" "}
          </label>
          <input
            type="text"
            name="fname"
            placeholder="Enter your first name"
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            onChange={handleChange}
            value={userDetails.fname}
            required
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            {" "}
            Last Name{" "}
          </label>
          <input
            type="text"
            name="lname"
            placeholder="Enter your last name"
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            onChange={handleChange}
            value={userDetails.lname}
            required

          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            {" "}
            Work Email{" "}
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
            {" "}
            Your Password{" "}
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
        <div className="mb-8">
          <label
            htmlFor="password"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            {" "}
            Confirm Password{" "}
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter confirm Password"
            onChange={handleChange}
            value={userDetails.confirmPassword}
            required
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8 flex">
          <label
            htmlFor="checkboxLabel"
            className="flex cursor-pointer select-none text-sm font-medium text-body-color"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="checkboxLabel"
                className="sr-only"
              />
              <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
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
            <span>
              By creating account means you agree to the
              <a href="#0" className="text-primary hover:underline">
                {" "}
                Terms and Conditions{" "}
              </a>
              , and our
              <a href="#0" className="text-primary hover:underline">
                {" "}
                Privacy Policy{" "}
              </a>
            </span>
          </label>
        </div>
        <div className="mb-6">
          <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp