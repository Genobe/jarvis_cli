let express = require('express')
let app = express()
let Marvel = require('./avengers')

app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})


app.get('/', function(request,response) {

  var avengers = new Marvel({
    publicKey : 'c2489fcd2d8ead99b5caa7e5ab898fab',
    privateKey : 'b64d2faa654fcbb7d2a37cfb4b62b353a4f06e0e'
  })

  avengers.assemble(function(avengers){
    response.send(JSON.parse(avengers))
  })

})

app.listen('4000', function() {
  console.log('listening on port: 4000')
}) 
