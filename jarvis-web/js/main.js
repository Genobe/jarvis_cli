var root = 'http://localhost:3000'
var useHash = true;
var hash = '#'
var router = new Navigo(root, useHash, hash)
var HomeView = require('./views/home-view')
var AvengersView = require('./views/avengers-view')
var ThorView = require('./views/thor-view')
var HulkView = require('./views/hulk-view')
var VisionView = require('./views/vision-view')
var SpiderManView = require('./views/spiderman-view')
var CaptainAmericaView = require('./views/captainamerica-view')

router
.on(function () {
  document.getElementById('content').innerHTML = ''
  HomeView()
})

.on('/avengers', function () {
  document.getElementById('content').innerHTML = ''
  AvengersView()
})

.on('/thor', function () {
  document.getElementById('content').innerHTML = ''
  ThorView()
})

.on('/hulk', function () {
  document.getElementById('content').innerHTML = ''
  HulkView()
})

.on('/vision', function () {
  document.getElementById('content').innerHTML = ''
  VisionView()
})


.on('/captain-america', function () {
  document.getElementById('content').innerHTML = ''
  CaptainAmericaView()
})

.on('/spider-man', function () {
  document.getElementById('content').innerHTML = ''
  SpiderManView()
})


  
  .resolve();
