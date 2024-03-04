/** @type {import('next').NextConfig} */
import pkg from "./next-i18next.config.js";
const { i18n } = pkg;
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['secure.gravatar.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ];
    }
    return config;
  },
};

export default nextConfig;
