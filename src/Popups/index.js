const BrownfieldPopup = (feature, layer) => {
  layer.bindPopup(
    `<div class="item"><i class="tag fa fa-tag"></i><p class="title">Reference: </p><p class="info">${feature.properties.sitereference}</p></div>
    <div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Address: </p><p class="info">${feature.properties.sitenameaddress.replace(/\"/g, '')}</p></div>
    <div class="item"><i class="tag fa fa-home"></i><p class="title">Net Dwellings: </p><p class="info">${feature.properties.netdwellingsrangeto}</p></div>

    
     `
  )
}

export {
    BrownfieldPopup
}
