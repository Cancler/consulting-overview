const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                appId: 'com.cancler.consulting-overview',
                publish: {
                    provider: "github"
                }
            }
        }
    }
})
