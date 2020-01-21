import {
    BrownfieldPopup
} from './Popups'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayOSOpen: true
    },
    DynamicData: [
        {
            key: 'Brownfield Land Register',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:brownfield_land_register_20191218&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                 onEachFeature: BrownfieldPopup,
                maxZoom: 2,
                style: {
                    color: '#636363',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#fec44f',
                    fillOpacity: 0.70
                }
            },
            DisplayOverlay: false
        }
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration