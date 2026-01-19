
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  // Default headers 
  const defaultHeaders = {
    Accept: 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || 'Network response was not ok');
  }

  return response.json();
};