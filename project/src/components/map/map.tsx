import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {StyleMap} from '../../types/map';
import {UrlMarker} from '../../const';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { Location } from '../../types/location';
import { getHoverOfferPoint } from '../../store/offer-search-process/selectors';
import { useAppSelector } from '../../hooks';
import classnames from 'classnames';
import './map.css';

type MapProps = {
  city: City | undefined;
  points: Location[];
  selectedPoint?: Location | undefined | null;
  zoom: number;
  styleMap: StyleMap;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.UrlMarkerDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedCustomIcon = new Icon({
  iconUrl: UrlMarker.UrlMarkerCurrent,
  iconSize: [50, 50],
  iconAnchor: [20, 50]
});

const hoveredCustomIcon = new Icon({
  iconUrl: UrlMarker.UrlMarkerCurrent,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

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
  const {city, points, selectedPoint, zoom, styleMap} = props;
  const hoveredPoint = useAppSelector(getHoverOfferPoint);

  const mapRef = useRef(null);
  const map = useMap(mapRef, hoveredPoint || selectedPoint || city?.location, zoom);

  useEffect(() => {
    let isMapMounted = true;
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

        if(isMapMounted)
        {
          marker
            .setIcon(GetPointIcon(point, selectedPoint, hoveredPoint))
            .addTo(map);
        }
      });
    }
    return () =>
    {
      isMapMounted = false;
    };
  }, [map, points, selectedPoint, hoveredPoint]);

  return <div className={classnames({'main-page__map': styleMap === StyleMap.Main}, {'room-page__map': styleMap === StyleMap.Room})} ref={mapRef}></div>;
}

export default Map;
