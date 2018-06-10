var Menu = function() {
  var content = document.getElementById('content')
    //Navigation Menu
    let nav = document.createElement('div')
    nav.className = 'w3-bar w3-blue'
    //Home Navigation Item
    let home = document.createElement('a')
    home.className = 'w3-bar-item w3-button'
    home.href = '#'  
    home.innerHTML = 'Home'
    nav.append(home)
    //Avengers Navigation Item
    let avengers = document.createElement('a')
    avengers.className = 'w3-bar-item w3-button'
    avengers.href = '#/avengers' 
    avengers.innerHTML = 'Avengers'
    nav.append(avengers)
    content.append(nav)
}

module.exports = Menu
