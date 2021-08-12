//const path = require('path')
module.exports = {

    proxyTable:{
        '/api': {
            target: 'http://localhost:8443',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}