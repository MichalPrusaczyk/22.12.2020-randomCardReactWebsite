import React, { Component } from 'react';
import Pics from './Pics'

class Generator extends Component {
  onClickerBOI = () => {
    window.location.reload()
  }
  render() {
    return (
      <div className="Generator">
        <Pics />
        <button onClick={this.onClickerBOI}>Losuj kartę</button>
      </div>
    );
  }
}

export default Generator;