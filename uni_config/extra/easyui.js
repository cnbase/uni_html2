/**
 * easyUI 组件
 * npm install vx-easyui --save
 */

/**
 * vue.config.js 配置项
 */
const vueConfig = {
    runtimeCompiler: true,
}

/**
 * vue-cli 原始babel配置文件
 */
const babelConfig = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ]
}

module.exports = {
    vueConfig,
    babelConfig
}