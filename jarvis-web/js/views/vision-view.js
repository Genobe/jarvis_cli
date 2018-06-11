var Menu = require('../components/menu')
var getVision = require('../components/vision-api')
var VisionView = function() {
  Menu()
  getVision()
}

module.exports = VisionView
