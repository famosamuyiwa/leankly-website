import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { ID } from "appwrite";
import {
  databases,
  APPWRITE_DATABASE_ID,
  APPWRITE_WAITLIST_TABLE_ID,
} from "./appwrite";
import { ContactFormDto } from "../interfaces/common";

// API base configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding auth tokens if needed
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common error cases
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem("authToken");
    }
    return Promise.reject(error);
  }
);

// Types
export interface WaitlistRequest {
  email: string;
  name?: string;
  phone?: string;
  location?: string;
}

export interface ApiError {
  message: string;
  status?: number;
}

// API service functions
export const apiService = {
  // Waitlist API using Appwrite Tables
  async joinWaitlist(data: WaitlistRequest) {
    try {
      if (!APPWRITE_DATABASE_ID || !APPWRITE_WAITLIST_TABLE_ID) {
        throw new Error("Appwrite configuration is missing");
      }

      // Prepare row data - only include fields that have values
      const rowData: Record<string, string> = {
        email: data.email,
      };

      if (data.name) {
        rowData.name = data.name;
      }
      if (data.phone) {
        rowData.phone = data.phone;
      }
      if (data.location) {
        rowData.location = data.location;
      }

      const row = await databases.createRow(
        APPWRITE_DATABASE_ID,
        APPWRITE_WAITLIST_TABLE_ID,
        ID.unique(),
        rowData
      );

      return row;
    } catch (error: unknown) {
      const appwriteError = error as {
        message?: string;
        code?: number;
        type?: string;
      };
      throw {
        message: appwriteError.message || "Failed to join waitlist",
        status: appwriteError.code,
      } as ApiError;
    }
  },

  // Contact API
  async contact(data: ContactFormDto) {
    try {
      const response = await apiClient.post(
        "/notifications/contact-form",
        data
      );
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      throw {
        message:
          (axiosError.response?.data as { message?: string })?.message ||
          "Failed to send contact form. Please try again later.",
        status: axiosError.response?.status,
      } as ApiError;
    }
  },

  // Health check
  async healthCheck(): Promise<{ status: string }> {
    try {
      const response = await apiClient.get("/health");
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      throw {
        message: "Service unavailable",
        status: axiosError.response?.status,
      } as ApiError;
    }
  },
};

export default apiService;
