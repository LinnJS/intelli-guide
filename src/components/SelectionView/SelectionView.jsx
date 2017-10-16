import React, { Component } from 'react';
import styles from './SelectionView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';
import ReactAudioPlayer from 'react-audio-player';
import BottomNavSelection from '../BottomNavSelection/BottomNavSelection';

import { database } from '../../base';

class SelectionView extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    const path = this.props.location.pathname.replace('/item', '');
    console.log(path);
    database
      .ref(path)
      .once('value')
      .then(data => {
        this.setState({
          item: data.val(),
        });
      });
  }

  render() {
    if (this.state.item) {
      return (
        <div className="SelectionView">
          <InternalHeader />
          <div className="paintingSelection" />
          <div className="guideSection">
            <div className="audioPlay">
              <ReactAudioPlayer src="my_audio_file.ogg" controls />
            </div>
            <h2>{this.state.item.title}</h2>
            {this.state.item.description.map((p, i) => <p key={i}>{p}</p>)}
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </div>
          <BottomNavSelection />
        </div>
      );
    } else {
      return <p>Loading!</p>;
    }
  }
}

export default SelectionView;
