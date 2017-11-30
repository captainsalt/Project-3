const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Webpack = require("Webpack");

var isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: {
        main: [
            "./client/index.js"
        ]
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
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/public/index.html"
        })
    ].concat((isProduction) ?
        //Production only plugins    
        [
            new CleanWebpackPlugin(["dist"], {
                root: path.join(__dirname, "client"),
                verbose: true
            }),
            new Webpack.optimize.UglifyJsPlugin(),
            new Webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ] :
        //dev only plugins
        [])
}