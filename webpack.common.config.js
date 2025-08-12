const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
            {
                test: /\.txt$/,
                loader: "raw-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new MiniCSSExtractPlugin({ filename: "styles.css" }),
    ],
};
