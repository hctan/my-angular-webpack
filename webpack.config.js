const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

module.exports = function () {
   return {
        mode: 'development', // Set mode to development
       entry: './src/main.ts',
       output: {
           path: __dirname + '/dist',
           filename: 'bundle.js',
           publicPath: '/', // Ensure proper routing
       },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: 'html-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {test: /\.ts$/, loader: '@ngtools/webpack'},
                {
                    test: /\.m?js$/,
                    resolve: { fullySpecified: false }, // Allow processing of ESM modules
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['@angular/compiler-cli/linker/babel'] // Use Angular Linker
                        }
                    }
                }
            ]
        },

       plugins: [
            /* new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/assets', to: 'assets' }
                ]
            }), */
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'), // Correct path to index.html
            }),
            new AngularWebpackPlugin({
                tsconfig: './tsconfig.json',
                //entryModule: './src/app/app.module#AppModule',
                sourceMap: true
             })
       ],
       devServer: {
            static: {
                directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
            },
            port: 4200, // Serve on http://localhost:4200
            open: true, // Automatically open the browser
            hot: true, // Enable Hot Module Replacement
            historyApiFallback: true, // Support Angular's routing
        }
   };
}