const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const htmlwebPack = new HtmlWebPackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    entry: './assets/javascript/entry.js',
    output:
    {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [htmlwebPack],
    module: {
        rules: [
            {
                test: /.\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
