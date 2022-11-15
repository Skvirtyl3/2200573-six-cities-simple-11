import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { City, Point} from '../types/map';
import {LAYER_MAP, ATTRIBUTE_LAYER_MAP} from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  point: City | Point,
  zoom: number
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const pointRef = useRef<City | Point>(point);
  const zoomRef = useRef<number>(zoom);

  useEffect(() => {
    let isMapMounted = true;
    if (mapRef.current === null)
    {
      return () =>
      {
        isMapMounted = false;
      };
    }

    //карту рисуем по новой
    if (!isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: point.lat,
          lng: point.lng
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

      //https://mourner.github.io/Leaflet/reference.html#map-maxbounds
      //описываемграницы карты
      // instance.setMaxBounds([
      //   [52.32, 4.8],
      //   [52.40, 4.96]
      // ]);

      if(isMapMounted)
      {
        setMap(instance);
        isRenderedRef.current = true;
        pointRef.current = point;
        zoomRef.current = zoom;
        // console.log('Карта была создана');
      }
    }

    //у карты редактируем центрирование и зум
    if (pointRef.current === undefined ||
        pointRef.current.lat !== point.lat ||
        pointRef.current.lng !== point.lng )
    {
      map !== undefined && isMapMounted && map?.setView([point.lat, point.lng], zoom);
      pointRef.current = point;
      zoomRef.current = zoom;
      // console.log('Карта была отредактирована');
    }

    return () =>
    {
      isMapMounted = false;
    };
  }, [mapRef, point, zoom, map]);

  return map;
}

export default useMap;
