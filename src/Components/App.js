import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import '../stylesheets/App.css';
import Navbar from './Navbar';
import video1 from '../assets/images/landingVideo.mp4';
import music from '../assets/images/landingMusic.mp3';


const App = () => (
  <div className="landing">
    <video autoPlay loop>
      <source src={video1} type="video/mp4" />
    </video>   
    <audio loop autoPlay controls>
      <source src={music} type="audio/mp3" />
      Error: your web browser does not support this audio player.
    </audio>    
    <Navbar/>    
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </div>
);

export default App;
