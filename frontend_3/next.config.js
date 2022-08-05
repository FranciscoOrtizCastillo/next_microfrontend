/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"frontend_3",
        filename: 'static/consumerFile.js',
        remoteType: 'var',
        remotes: {
            fe1: options.isServer ? path.resolve('../frontend_1/build/remoteEntry.js') : 'f1',
            fe2: options.isServer ? path.resolve('../frontend_2/build/remoteEntry_2.js') : 'f2',
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })
    )
    return config
  }
}

module.exports = nextConfig
