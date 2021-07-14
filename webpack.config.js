const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const TerserPlugin = require("terser-webpack-plugin");

let pages = ['index']
const plugins = []

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filesToEntry = (pages) => {
    let entries = {};
    for (let page of pages) {
        entries[page] = path.resolve(__dirname, `./src/pages/${page}/${page}.js`)
    }
    return entries
}

for (let page of pages) {
    plugins.push(new HTMLWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(__dirname, `./src/pages/${page}/${page}.pug`),
        chunks: [`${page}`]
    }))
}

plugins.push(new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, 'src/assets/images'),
            to: path.resolve(__dirname, 'dist/images')
        }
    ],
}))

plugins.push(new CleanWebpackPlugin())

plugins.push(new HtmlWebpackPugPlugin())

if (isProd) {
    plugins.push(new MiniCssExtractPlugin( {
        filename: '[name].css',
        chunkFilename: '[id].css',
    }))
}

module.exports = {
    mode: isDev ? 'development' : 'production',
    context: path.resolve(__dirname, 'src'),
    devtool: isDev ? 'source-map' : false,
    entry: filesToEntry(pages),
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    plugins: plugins,
    devServer: {
        port: 4200,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isDev ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    "postcss-loader",
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: 'file-loader'
            },
        ]

    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
}