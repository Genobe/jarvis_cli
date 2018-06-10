var api = require('marvel-api')
var Profile = require('./profile')

class Avengers {
  constructor(config) {
    this.marvel = api.createClient({
      publicKey: config.publicKey,
      privateKey: config.privateKey,
    })
  }  


  // make a seperate call for your fav character


  assemble(cb) {
    Promse.all([this.marvel.characters.findByName('Thor'),this.marvel.characters.findByName('Hulk'),this.marvel.findByName('Vision'),this.marvel.character.findByName('spider-name'),this.marvel.character.findByName('Captain America')]).then(function(responses) {
    
      let avengers = []
      responses.forEach(function(character) {
        let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
        avengers.push(profile.createProfile())

      })

      console.log('Avengers Assemeble!!')
      console.log(avengers)
      cb(JSON.stringify(avengers))
    })
  }
}


module.exports = Avengers
