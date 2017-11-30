const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require("Webpack");

var isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: {
        main: [
            "./client/index.js",
            "./client/app.css"
        ]
    },
    devServer: {
        contentBase: "./client/dist"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "client/dist")
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: (isProduction) ?
                    ExtractTextPlugin.extract(["css-loader"]) : //extract for production
                    ["style-loader", "css-loader"] //inline styline for dev
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/public/index.html",
            minify: {
                collapseWhitespace: isProduction,
                minifyJS: isProduction,
                minifyCSS: isProduction,
                collapseInlineTagWhitespace: isProduction,
                collapseBooleanAttributes: isProduction
            }
        })
    ].concat((isProduction) ?
        //Production only plugins    
        [
            new CleanWebpackPlugin(["dist"], {
                root: path.join(__dirname, "client"),
                verbose: true
            }),
            new ExtractTextPlugin("[name].css"),
            new Webpack.optimize.UglifyJsPlugin(),
            new Webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ] :
        //dev only plugins
        [])
}