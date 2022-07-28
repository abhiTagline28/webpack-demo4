const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:"production",
    entry: {
        app:["webpack-hot-middleware/client","./src/test.js"]
        // app:"./src/test.js"
    },
    output: {
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use:["style-loader","css-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg|ico)$/,
                use:["file-loader"],
            },
            {
                test: /\.(html)$/,
                use:["html-loader"],
            }
        ]
    },
    plugins:[new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin(), new HTMLWebpackPlugin({
        template: "./src/test.html",
        filename: "index.html",
        chunks:["app"]
    })]
}