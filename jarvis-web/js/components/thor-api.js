let detailCard = require('./detail-card')

var getThor = function() {
  let req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4) {
    let res = JSON.parse(this.responseText)

      for( var x=0; x < res.length; x++) {
        if(res[x].name == 'Thor') {
          detailCard(res[x])
        }
      }
    }
  }

  req.open('Get', 'http://ctysowski.tgb2.ninja:4000')
  req.send()
}


module.exports = getThor
