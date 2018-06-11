var Menu = require('../components/menu')
var getHulk = require('../components/hulk-api')
var HulkView = function() {
  Menu()
  getHulk()
}

module.exports = HulkView
