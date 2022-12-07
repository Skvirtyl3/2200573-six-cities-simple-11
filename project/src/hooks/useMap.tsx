import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {LAYER_MAP, ATTRIBUTE_LAYER_MAP} from '../const';
import { Location } from '../types/location';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  point: Location | undefined,
  zoom: number
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const pointRef = useRef<Location | undefined>(point);
  const zoomRef = useRef<number>(zoom);

  useEffect(() => {
    let isMapMounted = true;
    if (mapRef.current === null || point === undefined)
    {
      return () =>
      {
        isMapMounted = false;
      };
    }

    if (!isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: point.latitude,
          lng: point.longitude
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

      if(isMapMounted)
      {
        setMap(instance);
        isRenderedRef.current = true;
        pointRef.current = point;
        zoomRef.current = zoom;
      }
    }

    if (pointRef.current === undefined ||
        pointRef.current.latitude !== point.latitude ||
        pointRef.current.longitude !== point.longitude )
    {
      map !== undefined && isMapMounted && map?.setView([point.latitude, point.longitude], zoom);
      pointRef.current = point;
      zoomRef.current = zoom;
    }

    return () =>
    {
      isMapMounted = false;
    };
  }, [mapRef, point, zoom, map]);

  return map;
}

export default useMap;
