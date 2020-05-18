import React from 'react';
import './HomeBanner.sass';

function HomeBanner() {
  return (
    <div className="HomeBanner">
      <div className="HomeBanner-grid"></div>
      <div className="container">
        <div className="HomeBanner-image"></div>
        <div className="HomeBanner-logo"></div>
        <div className="HomeBanner-tagline"></div>
      </div>
    </div>
  );
}

export default HomeBanner;
