let express = require('express')
let app = express()
let Marvel = require('./avengers')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', function(request,response) {

  var avengers = new Marvel({
    publicKey: 'dd6bb762e1a9814c9d0fca4e4e73b61a',
    privateKey: '98a7b892d218f14be0b18510fc899c46025037a8'
  })

  avengers.assemble(function(avengers){
    response.send(JSON.parse(avengers))
  })

})

  app.listen('4000',function() {
    console.log('listening on port: 4000')
  })




