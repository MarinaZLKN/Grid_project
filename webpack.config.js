const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//немного отличается синтаксис!!
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
// если мы в prod, то сразу настраиваем хэш
const filename = (ext) => isDev ? `[name].${ext}`: `[name].[contenthash].${ext}`;

module.exports = {
    //как сборщик будет понимать ту папку, в которой хранятся все ассеты
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
        assetModuleFilename: 'images/[name][ext]',
            //path.join('img', '[name].[ext]'),
    },
    devServer: {
        watchFiles: path.resolve(__dirname, 'app'),
        open: true, //чтобы автоматически открывался файл
        compress: true, //чтобы это все сжималось
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'), //откуда берутся данные
            filename: 'index.html',
            //сжимаем все, если mode в prod
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        //просто вызывается -> ()
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
            // {
            //     test: /\.svg$/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: path.join('img', '[name].[contenthash][ext]'),
            //     }
            // },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    }

}


// {
//     test: /\.(png|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
// },
// {
//     test: /\.svg$/,
//         type: 'asset/resource',
//     generator: {
//     filename: path.join('img', '[name].[contenthash][ext]'),
// }
// },