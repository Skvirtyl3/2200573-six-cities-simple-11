import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { City, Point} from '../types/map';
import {LAYER_MAP, ATTRIBUTE_LAYER_MAP} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City | Point,
  zoom: number
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: zoom
      });

      const layer = new TileLayer(
        LAYER_MAP,
        {
          attribution:
          ATTRIBUTE_LAYER_MAP
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, zoom]);

  return map;
}

export default useMap;
