var Menu = require('../components/menu')
var getSpiderMan = require('../components/spiderman-api')
var SpiderManView = function() {
  Menu()
  getSpiderMan()
}

module.exports = SpiderManView
