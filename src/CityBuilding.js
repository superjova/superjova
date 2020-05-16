import React from 'react';
import './CityBuilding.sass';

class CityBuilding extends React.Component {
  render() {
    return (
      <div className="CityBuilding">
        <div className="CityBuilding__face CityBuilding__face--front">
          {this.props.front}
        </div>
        <div className="CityBuilding__face CityBuilding__face--back"></div>
        <div className="CityBuilding__face CityBuilding__face--right">
          {this.props.right}
        </div>
        <div className="CityBuilding__face CityBuilding__face--left"></div>
        <div className="CityBuilding__face CityBuilding__face--top"></div>
        <div className="CityBuilding__face CityBuilding__face--bottom"></div>
      </div>
    );
  }
}

export default CityBuilding;
