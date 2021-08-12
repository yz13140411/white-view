const path = require('path')

module.exports = {
    lintOnSave:false,
    dev:{
        assetsSuDirectory:'static',
        assetsPublicPath:'/',
        port: '8080',
        proxyTable: {
            'api':{
                target:'http://localhost:8081/api',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}