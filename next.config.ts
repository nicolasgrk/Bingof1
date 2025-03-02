import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: false
    }
  }
};

export default withPWA({
  dest: 'public',
  register: true,
  workboxOptions: {
    skipWaiting: true
  }
})(nextConfig);
