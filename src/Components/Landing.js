import React from 'react';
import video1 from '../assets/images/landingVideo.mp4';
import music from '../assets/images/landingMusic.mp3';
import track from '../assets/images/.vtt';
import '../stylesheets/App.css';

const Landing = () => (
  <div className="landing">
    <video className="landVid" autoPlay loop>
      <source src={video1} type="video/mp4" />
      <track default kind="captions" srcLang="en" src={track} />
    </video>
    <div className="melting1" />
    <div className="melting2" />
    <div className="welcome" />
    <audio loop autoPlay controls>
      <source src={music} type="audio/mp3" />
      <track default kind="captions" srcLang="en" src={track} />
    </audio>
  </div>
);

export default Landing;
