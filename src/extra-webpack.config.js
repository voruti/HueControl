const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        HUECONTROL_BRIDGE_IP: JSON.stringify(process.env.HUECONTROL_BRIDGE_IP),
        HUECONTROL_APPLICATION_KEY: JSON.stringify(process.env.HUECONTROL_APPLICATION_KEY)
      }
    })
  ]
}
