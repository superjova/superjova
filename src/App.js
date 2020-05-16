import React from 'react';
import CityBuilding from './CityBuilding';
import './App.sass';

function App() {
  return (
    <div className="App">
      <div className="App-buildings">
        <div class="container">
          <div className="App-background-building">
            <CityBuilding/>
            <CityBuilding/>
          </div>
          <div className="CircleBuilding"></div>
          <div className="App-foreground-building">
            <CityBuilding/>
          </div>
          <div className="App-marquee-building">
            <CityBuilding front={(<div className="App-marquee"></div>)} right={(<div className="App-marquee"></div>)}/>
          </div>
          <div className="App-building">
            <CityBuilding/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
