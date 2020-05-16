import React from 'react';
import './VideoCassette.sass';

class VideoCassette extends React.Component {
  classNames() {
    const names = ["VideoCassette"];

    if (this.props.isActive) {
      names.push("VideoCassette--active");
    }

    return names.join(" ");
  }
  render() {
    return (
      <div className={this.classNames()}>
        <div className="VideoCassette-label">{this.props.name}</div>
      </div>
    );
  }
}

export default VideoCassette;
