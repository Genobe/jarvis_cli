var Menu = require('../components/menu')
var getThor = require('../components/thor-api')
var ThorView = function() {
  Menu()
  getThor()
}

module.exports = ThorView
