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
          <img src={this.state.item.url} alt="" />
          <div className="guideSection">
            <h3>{this.state.item.title}</h3>
            <div className="audioPlay">
              <ReactAudioPlayer src="my_audio_file.ogg" controls />
            </div>
            {this.state.item.description.map((p, i) => <p key={i}>{p}</p>)}
            <div className="history">
              <h4>Exhibition History</h4>
              {this.state.item.exhibitionHistory.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          {/* <BottomNavSelection /> */}
        </div>
      );
    } else {
      return <p>Loading!</p>;
    }
  }
}

export default SelectionView;
