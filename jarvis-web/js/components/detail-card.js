var detailCard = function(data) {

  var card = document.createElement('header')
  card.style.width = '100%'
  card.className = 'w3-card-4 w3-display-middle'

  let header = document.createElement('header')
  header.className = 'w3-contaier w3-blue'
  card.append(header)

  let h1 = document.createElement('H1')
  h1.innerHTML = data.name
  header.append(h1)

  let description = document.createElement('div')
  description.className = 'w3-container'
  card.append(description)

  var note = document.createElement('p')
  note.innerHTML = data.description
  description.append(note)

  var cardContainer = document.createElement('div')
  cardContainer.className = 'w3-container'
  cardContainer.style.paddingBottom = '20px'
  card.append(cardContainer)

  content.append(card)
}


module.exports = detailCard
