'use client';

import React from 'react'
import { showToast } from '../Alerts/Toast';
import { onCancelSubscription } from '@/app/api/api';

const SubscriptionCancel = () => {

  const handleCancelSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await onCancelSubscription()
      .then(async (data) => {
        console.log(data, "cancel response------>");
        window.location.href = data?.url;
      })
      .catch((err) => {
        console.log(err);
        showToast({ message: err?.response?.data?.err, type: "error" });
      });
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 px-6 mt-5">
      <div className="max-w-3xl mx-auto border border-red-500 rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">Cancel Your Subscription</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We are sorry to see you go. By canceling your subscription, you will lose access to premium features after your current billing cycle ends. If there is anything we can improve, let us know!
        </p>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300"
            onClick={handleCancelSubscription}
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </section>

  )
}

export default SubscriptionCancel