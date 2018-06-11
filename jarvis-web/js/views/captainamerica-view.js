var Menu = require('../components/menu')
var getCaptainAmerica = require('../components/captainamerica-api')
var CaptainAmericaView = function() {
  Menu()
  getCaptainAmerica()
}

module.exports = CaptainAmericaView
