// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {} // eslint-disable-line no-native-reassign
window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var lcg_value = require('/Users/kvz/code/phpjs/src/php/math/lcg_value.js')

describe.skip('php.math.lcg_value.js', function () {
  it('should pass example 1', function (done) {
    lcg_value()
    var expected = 1
    var result = lcg_value()
    expect(result).to.deep.equal(expected)
    done()
  })
})