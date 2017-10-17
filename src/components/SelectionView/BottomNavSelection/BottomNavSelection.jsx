import React, { Component } from 'react';
import './BottomNavSelection.css';
import guideIcon from '../../../assets/guide.png';

class BottomNavSelection extends Component {
  render() {
    return (
      <div className="BottomNavSelection">
        <div className="icon">
          <i className="fa fa-picture-o" aria-hidden="true" />
          <p>Gallery</p>
        </div>
        <div className="icon">
          <i className="fa fa-university" aria-hidden="true" />
          <p>History</p>
        </div>
      </div>
    );
  }
}

export default BottomNavSelection;
