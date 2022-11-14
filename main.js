import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// import ol from 'ol'
import * as olProj from 'ol/proj';
import TileWMS from 'ol/source/TileWMS';





const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    // extent: [74.999975, 53.00698, 85.500006, 57.333396],
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/nso_belov/wms',
      params: {
        'LAYERS': 'nso_belov:Test_LG_2', 	
        'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [7500997, 5500000],
    zoom: 4,
  }),
});





// const layers = [
//   new TileLayer({
//     source: new OSM(),
//   }),
//   new TileLayer({
//     extent: [-13884991, 2870341, -7455066, 6338219],
//     source: new TileWMS({
//       url: 'https://ahocevar.com/geoserver/wms',
//       params: {'LAYERS': 'topp:states', 'TILED': true},
//       serverType: 'geoserver',
//       // Countries have transparency, so do not fade tiles:
//       transition: 0,
//     }),
//   }),
// ];
// const map = new Map({
//   layers: layers,
//   target: 'map',
//   view: new View({
//     center: [-10997148, 4569099],
//     zoom: 4,
//   }),
// });














// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: olProj.fromLonLat([80, 55]),
//     zoom: 7
//   })
// });



// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new TileWMS({
//         url: 'http://localhost:8080/geoserver/nso_belov/wms',
//         params: {
//                  'VERSION': '1.1.1',
//                  tiled: true,
//               "STYLES": '',
//               "LAYERS": 'nso_belov:veg_p_region',
//               "exceptions": 'application/vnd.ogc.se_inimage',
//            tilesOrigin: 74.999975 + "," + 53
//         }
//       }

//       )
//     })
//   ],
//   view: new View({
//     center: olProj.fromLonLat([75, 53]),
//     zoom: 7
//   })
// });










//----------------------------------------------------


// const map = new Map({
//     target: 'map',
//     view: new View({
//       projection: 'EPSG:3857', // here is the view projection
//       center: [0, 0],
//       zoom: 2,
//     }),
//     layers: [
//       new TileLayer({
//         source: new TileWMS({
//           projection: 'EPSG:2309', // here is the source projection
//           url: 'http://localhost:8080/geoserver/NSKgran/wms',
//           params: {
//                    'VERSION': '1.1.1',
//                    tiled: true,
//                 "STYLES": '',
//                 "LAYERS": 'NSKgran:granya',
//                 "exceptions": 'application/vnd.ogc.se_inimage',
//              tilesOrigin: 75.088598 + "," + 53.290714
//           },
//         }),
//       }),
//     ],
//   });



// const map = new Map({
//   target: 'map',
//   view: new View({
//     projection: 'EPSG:3857', // here is the view projection
//     center: [0, 0],
//     zoom: 2,
//   }),
//   layers: [
//     new TileLayer({
//       source: new TileWMS({
//         projection: 'EPSG:4326', // here is the source projection
//         url: 'http://localhost:8080/geoserver/wms?bbox=-130,24,-66,50&styles=population&Format=image/png&request=GetMap&layers=topp:states&width=550&height=250&srs=EPSG:4326',
//         params: {
//           // 'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
//         },
//       }),
//     }),
//   ],
// });

// projExtent = ol.proj.get('EPSG:4326').getExtent();
// startResolution = ol.extent.getWidth(projExtent) / 256;
// startResolution = 2000000 / 256;
// resolutions = new Array(22);
// for (var i = 0, ii = resolutions.length; i < ii; ++i) {
//   resolutions[i] = startResolution / Math.pow(2, i);
// }

// tileGrid = new ol.tilegrid.TileGrid({
//   extent: [8000000, 6500000, 10000000, 8500000],
//   resolutions: resolutions,
//   tileSize: [256, 256],
// });
   
// function tileUrlFunction(tileCoord, pixelRatio, projection) {
//   return 'http://localhost:8080/geoserver/wms?bbox=-130,24,-66,50&styles=population&Format=application/openlayers&request=GetMap&layers=topp:states&width=550&height=250&srs=EPSG:4326';
// }
   
// source = new ol.source.XYZ();
// source.setTileUrlFunction(tileUrlFunction);
// source.tileGrid = tileGrid;
   
// layer = new ol.layer.Tile({source: source});
// map.addLayer(layer);