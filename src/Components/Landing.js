import React from 'react';
import video1 from '../assets/images/landingVideo.mp4';
import music from '../assets/images/landingMusic.mp3';


const Landing = () => (
  <div className="landing">
    <video className="landVid" autoPlay loop>
        <source src={video1} type="video/mp4" />
    </video>
    <div className="melting" />
    <div className="welcome" />
    <audio loop autoPlay controls>
      <source src={music} type="audio/mp3" />
      Error: your web browser does not support this audio player.
    </audio>
 </div>
);

export default Landing;
