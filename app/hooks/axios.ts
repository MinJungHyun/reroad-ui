import axios from 'axios';
import { API_BASE_URL } from '../lib/consts';

const isServer = typeof window === 'undefined';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers'),
      token = cookies().get('access_token')?.value;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/, '$1');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
