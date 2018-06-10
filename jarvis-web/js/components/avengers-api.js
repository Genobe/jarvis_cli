let createCard = require('./card')

var getAvengers = function() {
  let req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4) {
      createCard(JSON.parse(this.responseText))
    }
  }

  req.open('Get', 'http://localhost:4000')
  req.send()
}


module.exports = getAvengers
