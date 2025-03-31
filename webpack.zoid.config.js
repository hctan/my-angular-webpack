const path = require('path');
const webpack = require('webpack'); // Import webpack

module.exports = {
    mode: 'production', // Use production mode for optimized output
    entry: './src/zoid/zoid-component.js', // Entry point for the Zoid component
    output: {
        path: path.resolve(__dirname, 'host/'), // Output directory
        filename: 'zoid-component.bundle.js', // Output file name
        library: 'MyAppComponent', // Expose the component as a global variable
        libraryTarget: 'var', // Attach the library to the global scope as a variable
    },
    resolve: {
        fallback: {
            process: require.resolve('process/browser'), // Polyfill for process
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser', // Provide process globally
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpile modern JS for browser compatibility
                },
            },
        ],
    },
    target: 'web', // Ensure the build is targeted for browsers
};