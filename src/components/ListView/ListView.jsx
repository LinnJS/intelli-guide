import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import style from './ListView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';
import guideIcon from '../../assets/guide.png';

class ListView extends Component {
  render() {
    return (
      <div className="ListView">
        <div className="InternalHeader">
          <InternalHeader />
        </div>
        <div className="selectionContainer">
          <Link to="/id">
            <div className="selection">
              <img src={daddyLongLegs} class="daddyLongLegs" alt="Dali Daddy Long Lets" />
            </div>
          </Link>
        </div>
        <footer>
          <div className="bottomNav">
            <i class="fa fa-list" aria-hidden="true" />
            <p>List</p>
          </div>
          <div className="bottomNav">
            <img src={guideIcon} class="guideIcon" alt="Nav guide icon" />
            <p>Guided</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default ListView;
