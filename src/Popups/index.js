  
const brownfield2019Popup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <p class="smbc-body smbc-!-font-color-white">Brownfield Land Register 2019</p>
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Reference: </span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.sitereference}</p>
    </div>
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Address:</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.sitenameaddress.replace(/"/g, '')}</p>
    </div>
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Net Dwellings:</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.netdwellingsrangeto}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const brownfield2020Popup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <p class="smbc-body smbc-!-font-color-white">Brownfield Land Register 2020</p>
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Reference: </span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.sitereference}</p>
    </div>
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Address:</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.sitenameaddress.replace(/"/g, '')}</p>
    </div>
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Net Dwellings:</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.netdwellingsrangefrom}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}


export {
    brownfield2019Popup,
    brownfield2020Popup
}
