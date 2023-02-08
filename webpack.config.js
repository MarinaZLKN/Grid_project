const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}`: `[name].[contenthash].${ext}`;

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //как сборщик будет понимать ту папку, в которой хранятся все ассеты
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'), //откуда берутся данные
            filename: 'index.html',
            //сжимаем все, если mode в prod
            minify: {
                collapseWhitespace: isProd
            }
        })
    ]
}