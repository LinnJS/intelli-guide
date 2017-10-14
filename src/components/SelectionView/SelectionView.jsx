import React, { Component } from 'react';
import styles from './SelectionView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';

<<<<<<< HEAD
import styles from './SelectionView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';

=======
>>>>>>> justin
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
<<<<<<< HEAD
            <i className="fa fa-play" aria-hidden="true" />
=======
            <i class="fa fa-play" aria-hidden="true" />
>>>>>>> justin
          </div>
          <p>
            Daddy Longlegs of the Evening - Hope! (Araignée du soir, espoir) - 1940. (Including: soft aeroplane, vomited
            by a cannon, ants, victory born of a broken wing, violoncello in white mastic, and an angel who weeps).
          </p>
<<<<<<< HEAD
          <i className="fa fa-arrow-down" aria-hidden="true" />
=======
          <i class="fa fa-arrow-down" aria-hidden="true" />
>>>>>>> justin
        </div>
        <footer />
      </div>
    );
  }
}

export default SelectionView;
