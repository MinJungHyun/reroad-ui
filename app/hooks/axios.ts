import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const isServer = typeof window === "undefined";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const configuration = config;

  if (isServer) {
    const { cookies } = await import("next/headers");
    const token = cookies().get("access_token")?.value;

    if (token) {
      configuration.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
      "$1",
    );

    if (token) {
      configuration.headers.Authorization = `Bearer ${token}`;
    }
  }

  return configuration;
});

export default api;
