const PROXY_CONFIG = {
  "/clip/v2": {
    "target": "https://ip",
    "secure": false,
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
