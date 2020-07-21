import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ListView.css";
import ListHeader from "./ListHeader";

import { database } from "../../base";

class ListView extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    database
      .ref(this.props.match.path)
      .once("value")
      .then((data) => {
        this.setState({
          items: data.val(),
        });
      });
  }

  render() {
    console.log("props", this.state);
    let search = this.props;
    const items = this.state.items.map((item, i) => {
      return (
        <Link to={`/item${this.props.match.path}/${i}`} key={i}>
          <div className="selection">
            <img className="item" src={item.url} alt="Item image" />
            <div className="details">
              <span>{item.title}</span>
              <span>{item.accessionIDNumber}</span>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="ListView">
        <ListHeader />
        <div className="selectionContainer">{items}</div>
      </div>
    );
  }
}

export default ListView;
