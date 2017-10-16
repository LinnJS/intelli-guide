import React, { Component } from 'react';
import styles from './BottomNavSelection.css';
import guideIcon from '../../assets/guide.png';

class BottomNavSelection extends Component {
  render() {
    return (
      <div className="footer">
        <div className="bottomNav">
          <i className="fa fa-picture-o" aria-hidden="true" />
          <p>Gallery</p>
        </div>
        <div className="bottomNav">
          <i className="fa fa-university" aria-hidden="true" />
          <p>History</p>
        </div>
      </div>
    );
  }
}

export default BottomNavSelection;
