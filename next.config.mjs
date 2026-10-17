/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  allowedDevOrigins: [
    '*.run.app',
    '*.aistudio.google.com',
    '*.google.com',
    'ais-dev-ecwql42kbl2nbnjcufcjnz-717955489443.asia-southeast1.run.app',
    'ais-pre-ecwql42kbl2nbnjcufcjnz-717955489443.asia-southeast1.run.app',
    'localhost:3000',
    '127.0.0.1:3000'
  ],
};

export default nextConfig;
