type Env = {
  newsBaseUrl: string;
  newsApiKey: string;
};

const env: Env = {
  newsBaseUrl: import.meta.env.VITE_APP_NEWS_BASE_URL,
  newsApiKey: import.meta.env.VITE_APP_NEWS_API_KEY,
};

export { env };
