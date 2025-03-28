const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    images: {
      domains: ['via.placeholder.com'],
    },
  });