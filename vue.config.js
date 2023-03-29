const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        externals: {
            sequelize: "require('sequelize')",
        },
    },
    pluginOptions: {
        electronBuilder: {
            externals: ["sequelize"],
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
