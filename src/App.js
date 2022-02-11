import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login.jsx';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player.jsx'
import { useDataLayerValue } from './components/data_layer/DataLayer.jsx';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token) {
      setToken(_token);
      spotify.setAccessToken(_token); 
      spotify.getMe().then((user) => {
      });
    }
  },[]);

  return (
    <div className="app">
      {
        token ? (<Player />) : (<Login />)
      }
    </div>
  );
}

export default App;
