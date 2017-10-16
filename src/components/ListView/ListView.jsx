import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './ListView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';
import guideIcon from '../../assets/guide.png';

import { database } from '../../base';

class ListView extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    database
      .ref(this.props.match.path)
      .once('value')
      .then(data => {
        this.setState({
          items: data.val(),
        });
      });
  }

  render() {
    const items = this.state.items.map((item, i) => {
      return (
        <Link to={`/item${this.props.match.path}/${i}`} key={i}>
          <div className="selection">
            <img className="daddyLongLegs" src={item.url} alt="Dali Daddy Long Lets" />
          </div>
        </Link>
      );
    });
    return (
      <div className="ListView">
        <div className="InternalHeader">
          <InternalHeader />
        </div>
        <div className="selectionContainer">{items}</div>
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
