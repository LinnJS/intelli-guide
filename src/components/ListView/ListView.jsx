import React, { Component } from 'react';
import style from './ListView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';
import guideIcon from '../../assets/guide.png';

class ListView extends Component {
  render() {
    return (
      <div className="body">
        <div className="InternalHeader">
        <InternalHeader />
        </div>
{/* Selection Container */}
      <div className="selectionContainer">
        <div className="selectionOne">
          <img src={daddyLongLegs} class="daddyLongLegs" alt="Dali Daddy Long Lets" />
      </div>
    </div>
    <footer>
      <div className="bottomNav">
          <i class="fa fa-list" aria-hidden="true"></i>
          <p>List</p>
      </div>
      <div className="bottomNav">
          <img src={guideIcon} class="guideIcon" alt="Nav guide icon" />
          <p>Guided</p>
      </div>
  </footer>
  </div>
    )
  }
}

export default ListView;
