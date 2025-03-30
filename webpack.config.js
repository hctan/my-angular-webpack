const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

module.exports = function () {
   return {
       entry: './src/main.ts',
       output: {
           path: __dirname + '/dist',
           filename: 'app.js'
       },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
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
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/assets', to: 'assets' }
                ]
            }), 
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),
            new AngularWebpackPlugin({
                tsconfig: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true
             })
       ]
   };
}