import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { roomParameters } from './mocks/offers';

const Setting = {
  Count:  312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App settigCount = {Setting.Count} offers={roomParameters}/>
  </React.StrictMode>,
);
