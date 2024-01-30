const path = require("path");

module.exports = {
    mode: "development",
    watch: true,
    entry: "./scripts/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "module",
        clean: true
    },
    experiments: { outputModule: true },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
}