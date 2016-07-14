
const webpack = require('webpack');

const envPlugin = new webpack.DefinePlugin(
  {
    'process.env': {
      APP_URI: JSON.stringify(process.env.APP_URI),
      APP_WAT: JSON.stringify(process.env.APP_WAT),
      APP_GRR: JSON.stringify(process.env.APP_GRR)
    }
  }
)

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: [
    envPlugin
  ]
}
