const merge = require('merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
});