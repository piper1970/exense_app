const merge = require('merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
});