import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {StyleMap} from '../../types/map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { Location } from '../../types/location';

type MapProps = {
  city: City | undefined;
  points: Location[];
  selectedPoint?: Location | undefined | null; //точка выбранного предложения /offer/id
  hoveredPoint?: Location | undefined | null; //точка предложения из активнаой карточки из списка
  zoom: number;
  styleMap: StyleMap;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [50, 50],
  iconAnchor: [20, 50]
});

const hoveredCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const styleMapMain = {height: '500px'};
const styleMapRoom = {height: '500px', width: '1000px', marginLeft: 'auto', marginRight: 'auto'};

function GetPointIcon(point: Location, selectedPoint: Location | undefined | null , hoveredPoint: Location | undefined | null) : Icon
{
  if(selectedPoint !== undefined && point.latitude === selectedPoint?.latitude && point.longitude === selectedPoint?.longitude)
  {
    return selectedCustomIcon;
  }

  if(hoveredPoint !== undefined && point.latitude === hoveredPoint?.latitude && point.longitude === hoveredPoint?.longitude)
  {
    return hoveredCustomIcon;
  }

  return defaultCustomIcon;
}

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint, hoveredPoint, zoom, styleMap} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, hoveredPoint || selectedPoint || city?.location, zoom);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof Marker) {
          map.removeLayer(layer);
        }
      });

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(GetPointIcon(point, selectedPoint, hoveredPoint))
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, hoveredPoint]);

  return <div style={ styleMap === StyleMap.Main ? styleMapMain : styleMapRoom} ref={mapRef}></div>;
}

export default Map;
