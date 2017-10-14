import React, { Component } from 'react';
import styles from './SelectionView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';

class SelectionView extends Component {
  render() {
    return (
      <div className="body">
        <div className="InternalHeader">
          <InternalHeader />
        </div>
        <div className="paintingSelection">
          <img src={daddyLongLegs} alt="Daddy Long Lets Dali Painting" />
        </div>
        <div className="guideSection">
          <div className="audioPlay">
            <i class="fa fa-play" aria-hidden="true" />
          </div>
          <p>
            Daddy Longlegs of the Evening - Hope! (Araignée du soir, espoir) - 1940. (Including: soft aeroplane, vomited
            by a cannon, ants, victory born of a broken wing, violoncello in white mastic, and an angel who weeps).
          </p>
          <i class="fa fa-arrow-down" aria-hidden="true" />
        </div>
        <footer />
      </div>
    );
  }
}

export default SelectionView;
