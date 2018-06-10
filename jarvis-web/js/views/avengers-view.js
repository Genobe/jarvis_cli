var Menu = require('../components/menu')
var getAvengers = require('../components/avengers-api')
var AvengersView = function() {
  Menu()
  getAvengers()
}

module.exports = AvengersView
