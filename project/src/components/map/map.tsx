import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Point, StyleMap} from '../../types/map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';

type MapProps = {
  city: City | undefined;
  points: Point[];
  selectedPointKey?: string | undefined | null; //точка выбранного предложения /offer/id
  hoveredPointKey?: string | undefined | null; //точка предложения из активнаой карточки из списка
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

function FindPointByKey(points: Point[], key: string | undefined | null) : Point | undefined
{
  return points.find((item: Point) => key !== undefined && item.title === key);
}

function GetPointIcon(point: Point, selectedPointKey: string | undefined | null , hoveredPointKey: string | undefined | null) : Icon
{
  if(selectedPointKey !== undefined && point.title === selectedPointKey)
  {
    return selectedCustomIcon;
  }

  if(hoveredPointKey !== undefined && point.title === hoveredPointKey)
  {
    return hoveredCustomIcon;
  }

  return defaultCustomIcon;
}

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPointKey, hoveredPointKey, zoom, styleMap} = props;

  const selectedPoint = FindPointByKey(points, selectedPointKey);
  const hoveredPoint = FindPointByKey(points, hoveredPointKey);
  const mapRef = useRef(null);
  const map = useMap(mapRef, hoveredPoint || selectedPoint || city, zoom);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(GetPointIcon(point, selectedPointKey, hoveredPointKey))
          .addTo(map);
      });
    }
  }, [map, points, selectedPointKey, hoveredPointKey]);

  return <div style={ styleMap === StyleMap.Main ? styleMapMain : styleMapRoom} ref={mapRef}></div>;
}

export default Map;
