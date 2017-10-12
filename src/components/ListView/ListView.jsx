import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <img className="daddyLongLegs" src={daddyLongLegs} alt="Dali Daddy Long Lets" />
            </div>
          </Link>
        </div>
        <footer>
          <div className="bottomNav">
            <i className="fa fa-list" aria-hidden="true" />
            <p>List</p>
          </div>
          <div className="bottomNav">
            <img className="guideIcon" src={guideIcon} alt="Nav guide icon" />
            <p>Guided</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default ListView;
