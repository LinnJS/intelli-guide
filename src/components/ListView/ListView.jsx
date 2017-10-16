import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './ListView.css';
import InternalHeader from '../InternalHeader/InternalHeader';
import daddyLongLegs from '../../assets/daddyLongLegs.jpg';
import BottomNavList from '../BottomNavList/BottomNavList';

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
            <img className="item" src={item.url} alt="Item image" />
            <span>{item.title}</span>
            <span>{item.accessionIDNumber}</span>
          </div>
        </Link>
      );
    });
    return (
      <div className="ListView">
        <InternalHeader />
        <div className="selectionContainer">{items}</div>
        <BottomNavList />
      </div>
    );
  }
}

export default ListView;
