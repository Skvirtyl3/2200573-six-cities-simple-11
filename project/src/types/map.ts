export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export enum Centering {
  City = 'City', //центрируем карту по координатам города
  Point = 'Point' //центрируем карту по выделенной точке
}

export enum StyleMap {
  Main = 'Main',
  Room = 'Room'
}
