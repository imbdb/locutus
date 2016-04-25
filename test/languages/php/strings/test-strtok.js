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
var strtok = require('/Users/kvz/code/phpjs/src/php/strings/strtok.js')

describe('php.strings.strtok.js', function () {
  it('should pass example 1', function (done) {
    $string = "\t\t\t\nThis is\tan example\nstring\n"
    $tok = strtok($string, " \n\t")
    $b = ''
    while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
    $b
    var expected = "Word=This\nWord=is\nWord=an\nWord=example\nWord=string\n"
$string = "\t\t\t\nThis is\tan example\nstring\n"
$tok = strtok($string, " \n\t")
$b = ''
while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
    var result = $b
    expect(result).to.deep.equal(expected)
    done()
  })
})