import { brownfield2019Popup, brownfield2020Popup} from './Popups'
import { brownfield2019Style, brownfield2020Style} from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.391067,-2.1197936],
        StartingZoom: 2,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
    },
    DynamicData: 
    [    
        {
            key: 'Brownfield Land Register 2019',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:brownfield_land_register_20191218&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: brownfield2019Style,
                onEachFeature: brownfield2019Popup
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Brownfield Land Register 2020',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:brownfield_land_register_20201218&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: brownfield2020Popup,
                maxZoom: 2,
                style: brownfield2020Style
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
        
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration