import million from "million/compiler";
import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const millionConfig = {
  auto: true,
  // if you're using RSC:
  auto: { rsc: true },
};

export default million.next(nextPWA(nextConfig), millionConfig);
