import React from 'react';
import '../../style/HeroVideoDemo.css';

function HeroVideoDemo() {
  return (
    <div className="hero-video-demo__container">
      <div className="hero-video-demo__box">
        <div className="hero-video-demo__window-controls">
          
        </div>
        <div className="hero-video-demo__inner">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/src/assets/demos/hero-light-lg.webm" type="video/webm" style={{ objectFit: 'cover' }}/>
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroVideoDemo;
