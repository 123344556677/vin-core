import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Define the base URL and timeout
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://example.com/api';

// Create an Axios instance
const apiInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000, // Optional timeout in milliseconds
});

// Add a request interceptor to include the token
apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Fetch token from localStorage
    let token: string | null = null;

    // Check if running on the client-side
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
      // Remove quotes if any and trim the token
      if (token) {
        token = token.replace(/^"|"$/g, '').trim();
      }
      console.log('Token in localStorage:', token); // Check token in localStorage
    }

    if (token) {
      // Ensure headers are of the correct type
      if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`; // Add the Authorization header
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiInstance;





