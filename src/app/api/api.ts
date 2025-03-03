import { BillingDetails, BillingDetailsResponse } from '@/types/billing';
import apiInstance from './apiInstance';
import { LoginUser, LoginUserResponse, SignupUser } from '@/types/auth';



// Example: Fetch user details
export const order = async (billingDetails): Promise<BillingDetailsResponse> => {
  try {
    const response = await apiInstance.post<BillingDetailsResponse>('/order/createOrder',billingDetails); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export const stripeSingleOrder = async (orderId) => {
  try {
    const response = await apiInstance.get(`/payment/create-report-payment/${orderId}`); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching single stripe payment details:', error);
    throw error;
  }
};
export const getOrderByuserid= async (userId) => {
  try {
    const response = await apiInstance.get(`/order/getOrdersOfUser/${userId}`); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching single stripe payment details:', error);
    throw error;
  }
};
export const onCancelSubscription = async () => {
  try {
    const response = await apiInstance.get('/payment/customers'); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching cancel subscription payment details:', error);
    throw error;
  }
};

export const stripeSubscriptionOrder = async (orderId) => {
  try {
    const response = await apiInstance.get(`/payment/create-subscription-session/${orderId}`); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching single stripe payment details:', error);
    throw error;
  }
};

export const paypalSingleOrder = async (orderId) => {
  try {
    const response = await apiInstance.get(`/payment/paypal/create-payment/${orderId}`); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching single paypal details:', error);
    throw error;
  }
};

export const onSignUp = async (data):Promise<SignupUser> => {
  try {
    const response = await apiInstance.post('/user/signup',data); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error signup user:', error);
    throw error;
  }
};
export const onLogin = async (data):Promise<LoginUserResponse> => {
  try {
    const response = await apiInstance.post('/user/login',data); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error login user:', error);
    throw error;
  }
};

export const getUser = async () => {
  // console.log(id,"id coming in api--->")
  try {
    const response = await apiInstance.get('/user/getUser'); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching single user details:', error);
    throw error;
  }
};

export const onUpateInfo = async (data) => {
  try {
    const response = await apiInstance.patch('/user/updateInformation',data); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error login user:', error);
    throw error;
  }
};

export const onSendMessage = async (data) => {
  try {
    const response = await apiInstance.post('/contact/sendMessage',data); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
