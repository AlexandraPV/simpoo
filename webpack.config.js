'use strict';
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        admin: ['./simpoo/front-end/admin/admin_app.js', './simpoo/front-end/admin/scss/style.scss'],
        client: ['./simpoo/front-end/client/client_app.js', './simpoo/front-end/client/scss/style.scss']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './simpoo/static')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]'
                    }
                ]
            },

            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        // options: {
                        //     name: '[name].[ext]',
                        //     outputPath: path.resolve(__dirname, 'static')
                        // }
                    }
                ]
            }
//            {
//                test: /\.(jpe?g|png|gif|svg|ico)$/i,
//                use: [{
//                    loader: 'file-loader',
//                    options: {
//                        name: '[name].[ext]',
//                        outputPath: path.resolve(__dirname, './front-end/images')
//                    }
//                }]
//            },

//            {
//              test: /\.(gif|png|jpe?g|svg)$/i,
//              use: [
//                'file-loader',
//                {
//                  loader: 'image-webpack-loader',
//                  options: {
//                    bypassOnDebug: true, // webpack@1.x
//                    disable: true, // webpack@2.x and newer
//                    outputPath: path.resolve(__dirname, './front-end/images')
//                  },
//                },
//              ],
//            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].min.css"
        })
    ]
};