/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This codebase doesn't use PropTypes and renders raw three.js JSX
  // intrinsics (react-three-fiber), which trip react/prop-types and
  // react/no-unknown-property under the legacy .eslintrc. Lint stays
  // available via `yarn lint`; it just shouldn't fail the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
