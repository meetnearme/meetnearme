require('fs');
require('dotenv').config();
const withFonts = require('next-fonts');
const withPreact = require('next-plugin-preact');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
];

module.exports = withPreact(
  withFonts(
    withBundleAnalyzer({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      trailingSlash: true,
      basePath: '',
      // The starter code load resources from `public` folder with `router.basePath` in React components.
      // So, the source code is "basePath-ready".
      // You can remove `basePath` if you don't need it.
      reactStrictMode: true,
      // NOTE: The follow are propagated to the client. No secrets!
      // Will be available on both server and client
      publicRuntimeConfig: {
        // TODO: public (exposed to clients env vars here) e.g.
        // GOOGLE_ANALYTICS_UA_ID: process.env.GOOGLE_ANALYTICS_UA_ID,
      },

      async headers() {
        if (process.env.HEADERS !== 'false') {
          return [
            {
              // Apply these headers to all routes in your application.
              source: '/(.*)',
              headers: securityHeaders,
            },
          ];
        }
        return [];
      },
    })
  )
);
