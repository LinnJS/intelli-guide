import React, { Component } from 'react';
import styles from './SelectionView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';
import ReactAudioPlayer from 'react-audio-player';
import BottomNavSelection from '../BottomNavSelection/BottomNavSelection';

class SelectionView extends Component {
  render() {
    return (
      <div className="SelectionView">
        <InternalHeader />
        <div className="paintingSelection" />
        <div className="guideSection">
          <div className="audioPlay">
            <ReactAudioPlayer src="my_audio_file.ogg" controls />
          </div>
          <p>
            Daddy Longlegs of the Evening - Hope! (Araignée du soir, espoir) - 1940. (Including: soft aeroplane, vomited
            by a cannon, ants, victory born of a broken wing, violoncello in white mastic, and an angel who weeps).
          </p>
          <i className="fa fa-arrow-down" aria-hidden="true" />
        </div>
        <BottomNavSelection />
      </div>
    );
  }
}

export default SelectionView;
