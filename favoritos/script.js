(async () => {

    const favoriteCitiesNames = JSON.parse(localStorage.getItem('favoritos'))

    const list = document.querySelector('#favorite-cities-list')

    for(const nome of favoriteCitiesNames) {
      const li = document.createElement('li')
        li.textContent = nome
        list.appendChild(li)
    }
  })()