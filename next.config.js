const path = require('path');
const glob = require('glob');
const dotenv = require('dotenv').config();

module.exports = {
   experimental: {
      rewrites() {
         return [
            {
               source: '/',
               destination: '/show/latest/latest'
            }
         ]
      }
   },
   algolia: config => {
      api_id = process.env.ALGOLIA_API_ID,
         api_key = process.env.ALGOLIA_SEARCH_ONLY_API_KEY
      admin_api_key = process.env.ALGOLIA_ADMIN_API_KEY
   },
   webpack: (config, { isServer, dev }) => {
      config.node = {
         fs: "empty",
      }
      config.module.rules.push(
         {
            test: /\.(css|styl)/,
            loader: 'emit-file-loader',
            options: {
               name: 'dist/[path][name].[ext]',
            },
         },
         {
            test: /\.css$/,
            use: ['babel-loader', 'raw-loader', 'postcss-loader'],
         },
         {
            test: /\.styl$/,
            use: [
               'babel-loader',
               'raw-loader',
               'postcss-loader',
               {
                  loader: 'stylus-loader',
                  options: {
                     includePaths: ['styles', 'node_modules']
                        .map(d => path.join(__dirname, d))
                        .map(g => glob.sync(g))
                        .reduce((a, c) => a.concat(c), []),
                  },
               },
            ],
         }
      );
      if (isServer && !dev) {
         const originalEntry = config.entry;
         config.entry = async () => {
           const entries = { ...(await originalEntry()) };
           // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
           entries['./scripts/generate-rss.js'] = './scripts/generate-rss.js';
           return entries;
         };
       }
      return config;
   },
};
