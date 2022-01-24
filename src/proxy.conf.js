const PROXY_CONFIG = {
  "/clip/v2": {
    "target": `https://${process.env.HUECONTROL_BRIDGE_IP}`,
    "secure": false,
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
