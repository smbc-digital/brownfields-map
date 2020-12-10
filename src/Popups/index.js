  
const brownfield2019Popup = (feature, layer) => {
  
  const content = `<div class="item"><p class="title">Brownfield Land Register 2019</p>
    <p></p>
    <p class="item"><i class="tag fa fa-tag"></i><p class="title">Reference: </p><p class="info">${feature.properties.sitereference}</p>
    <p class="item"><i class="tag fa fa-map-marker"></i><p class="title">Address: </p><p class="info">${feature.properties.sitenameaddress.replace(/"/g, '')}</p>
    <p class="item"><i class="tag fa fa-home"></i><p class="title">Net Dwellings: </p><p class="info">${feature.properties.netdwellingsrangeto}</p>
    
    </div>`

  layer.bindPopup(content)
}

const brownfield2020Popup = (feature, layer) => {
  
  const content = `<div class="item"><p class="title">Brownfield Land Register 2020</p>
    <p></p>
    <p class="item"><i class="tag fa fa-tag"></i><p class="title">Reference: </p><p class="info">${feature.properties.sitereference}</p>
    <p class="item"><i class="tag fa fa-map-marker"></i><p class="title">Address: </p><p class="info">${feature.properties.sitenameaddress.replace(/"/g, '')}</p>
    <p class="item"><i class="tag fa fa-home"></i><p class="title">Net Dwellings: </p><p class="info">${feature.properties.netdwellingsrangefrom}</p>
    
    </div>`

  layer.bindPopup(content)
}


export {
    brownfield2019Popup,
    brownfield2020Popup
}
