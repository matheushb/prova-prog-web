(async () => {

  const list = document.querySelector('#state-list')
  
  const stateApiResponse = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(data => data.json())
  const stateNames = Object.keys(stateApiResponse).map((state) => {return {
   nome: stateApiResponse[state].nome,
   uf: stateApiResponse[state].sigla
  }})

  for(const { nome, uf } of stateNames) {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.text = nome
    link.href = './municipios/index.html?uf=${uf}'
    li.appendChild(link)
    list.appendChild(li)
  }
})()