const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


module.exports = {
    mode: 'development', 
    entry: {
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean:true,
        assetModuleFilename: '[name][ext]'
    },
//     entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   },
    devServer: {
        static:{
            directory:path.resolve(__dirname, 'dist'),

        },
        port: 8080,
        open:true,
        hot:true, 
        compress:true,
    },
    module:{
        rules:[
            {
            test:/\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test:/\.html$/,
            use:[
                'html-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.svg$/,
            use: [
              { loader: 'svg-sprite-loader', options: {extract: true} },
              'svgo-loader'
            ]
          }
    ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack App', 
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new SpriteLoaderPlugin()
    ]
}
