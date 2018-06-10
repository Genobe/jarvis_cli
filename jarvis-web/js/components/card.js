var card = function(arr) {

  for (var x=0; x < arr.length; x++) {
    var card = document.createElement('div')
    card.style.width = '15%'
    card.className = 'w3-card-4'
    card.style.marginTop = '8px'
    card.style.marginLeft = '8px'
    card.style.marginRight = '8px'
    card.style.marginBottom= '8px'
    card.style.float = 'left'
    card.style.display = 'inline'

    var img = document.createElement('img')
    img.style.width = '100%'


    var cardContainer = document.createElement('div')
    cardContainer.className = 'w3-container w3-center'
    cardContainer.style.paddingBottom = '20px'
    card.append(cardContainer)

    var name = document.createElement('p')
    name.innerHTML = arr[x].name
    cardContainer.append(name)

    let a = document.createElement('a')
    a.className = 'w3-button'
    a.innerHTML = 'More Info'

    if(arr[x].name == 'Hulk') {
      img.src = '/assets/littlehulk.png'
      a.href = '#/hulk'
    }
  
    if(arr[x].name == 'Captain America') {
      img.src = '/assets/captainamerica.png'
      a.href = '#/captain-america'
    }

    if(arr[x].name == 'Spider-Man') {
      img.src = '/assets/spiderman.png'
      a.href = '#/spider-man'
    }

    if(arr[x].name == 'Vision') {
      img.src = '/assets/vision.png'
      a.href = '#/vision'
    }

    if(arr[x].name == 'Thor') {
      img.src = '/assets/thorpic.png'
      a.href = '#/thor'
    }

    cardContainer.append(a)

    content.append(card)

  }
}

module.exports = card
