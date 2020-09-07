const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        home: ["@babel/polyfill", __dirname + "/src/index.js"],
        second: ["@babel/polyfill", __dirname + "/src/assets/js/second.js"],
        third: ["@babel/polyfill", __dirname + "/src/assets/js/third.js"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["home"]
        }),
        new HtmlWebpackPlugin({
            template: "src/2/index.html",
            filename: "second.html",
            chunks: ["second"]
        }),
        new HtmlWebpackPlugin({
            template: "src/3/moderator/index.html",
            filename: "third.html",
            chunks: ["third"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};
