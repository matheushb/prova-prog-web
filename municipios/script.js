(async () => {
    
    const uf = document.URL.split('?')[1].split('=')[1]

    document.querySelector('#title').textContent += `${uf}`.toUpperCase()
    const list = document.querySelector('#cities-list')
    const citiesApiResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(data => data.json())
    const citiesNames = Object.keys(citiesApiResponse).map((state) => citiesApiResponse[state].nome)
  
    for(const city of citiesNames) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const button = document.createElement('button')
        p.textContent = city
        button.textContent = 'Favoritar'
        button.setAttribute('class', 'fav-button')
        li.appendChild(p)
        li.appendChild(button)
        list.appendChild(li)
    }
    const buttons = document.getElementsByClassName('fav-button')

    const favoriteItems = JSON.parse(localStorage.getItem('favoritos')) ?? []

    for(const button of buttons) {
        button.addEventListener('click', () => {
            const cityName = button.parentNode.querySelector('p').innerText
            console.log(favoriteItems)
            if(!favoriteItems.includes(cityName)) favoriteItems.push(cityName)
            console.log(favoriteItems)
            localStorage.setItem('favoritos', JSON.stringify(favoriteItems))
        })
    }
  })()



