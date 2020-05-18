import React from 'react';
import HomeBanner from './HomeBanner';
import './RaceGame.sass';

class RaceGame extends React.Component {
  render() {
    return (
      <div className="RaceGame">
        <div className="RaceGame-level">
          <div className="RaceGame-street">
            <div className="RaceGame-stripes"></div>
          </div>
        </div>
        <div className="RaceGame-sign">
          <div className="RaceGame-sign-text">
            Ruby on Rails
          </div>
        </div>
        <div className="RaceGame-sign">
          <div className="RaceGame-sign-text">
            React
          </div>
        </div>
        <div className="RaceGame-sign">
          <div className="RaceGame-sign-text">
            Postgresql
          </div>
        </div>
        <div className="RaceGame-sign">
          <div className="RaceGame-sign-text">
            API Architecture
          </div>
        </div>
        <div className="RaceGame-sign">
          <div className="RaceGame-sign-text">
            CSS Wizard
          </div>
        </div>
      </div>
    );
  }
}

export default RaceGame;
