/* eslint-disable no-unused-vars */
const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "./src/assets/scss")],
    },
    images: {
        path: "/_next/image",
        formats: ["image/*"],
        domains: ["ordinals.com", "d2v3k2do8kym1f.cloudfront.net"],
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // eslint-disable-next-line no-param-reassign
        (config.experiments = { asyncWebAssembly: true }),
            (config.ignoreWarnings = [
                {
                    message: /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
                },
            ]);
        return config;
    },
});
