// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 对应的 vw 适配的标准屏的宽度   iphoneX
      // 设计图 750 调成1倍图 => 适配375标准屏幕
      // 设计图 640 调成1倍 => 适配320标准屏幕
      viewportWidth: 375
    }
  }
}
