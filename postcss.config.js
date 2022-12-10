const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')
const postcssAutoRem = require('postcss-auto-rem')

module.exports = {
  // only vars used are in build output
  plugins: [
    postcssJitProps(OpenProps),
    postcssAutoRem({ size: 16 })
  ]
}
