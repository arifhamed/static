import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

const WebConfig = merge(common, {
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    chunkFilename: '[name].js',
    library: Bundle.main,
    globalObject: 'this'
  },
  externals: ['causal-net.core', 'causal-net.utils', 'random']  
});
export default WebConfig;