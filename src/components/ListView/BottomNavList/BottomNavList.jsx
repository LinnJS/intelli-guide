import React, { Component } from 'react';
import './BottomNavList.css';
import guideIcon from '../../../assets/guide.png';

class BottomNavList extends Component {
  render() {
    return (
      <div className="BottomNavList">
        <div className="icon">
          <i className="fa fa-list " aria-hidden="true" />
          <p>List</p>
        </div>
        <div className="icon">
          <img className="guideIcon" src={guideIcon} alt="Nav guide icon" />
          <p>Guided</p>
        </div>
      </div>
    );
  }
}

export default BottomNavList;
