const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
// const WorkboxPlugin = require('workbox-webpack-plugin'); // <--sw

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/index.js",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    },
                    {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            debug: process.env.NODE_ENV === "development"
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        alias: {
            images: path.join(__dirname, 'src/images'),
            fonts: path.join(__dirname, 'src/fonts'),
            "@": path.join(__dirname, 'src/js'),
            "#": path.join(__dirname, 'src/scss'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        //   //sw -->
        //  new WorkboxPlugin.GenerateSW({
        //      // Do not precache images
        //      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        //      // Define runtime caching rules.
        //      runtimeCaching: [{
        //          // Match any request that ends with .png, .jpg, .jpeg or .svg.
        //          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        //          // Apply a cache-first strategy.
        //          handler: 'CacheFirst',
        //          options: {
        //              // Use a custom cache name.
        //              cacheName: 'images',
        //              // Only cache 10 images.
        //              expiration: {
        //                  maxEntries: 10,
        //              }
        //          }
        //      }]
        //  }) 
    ],
}
