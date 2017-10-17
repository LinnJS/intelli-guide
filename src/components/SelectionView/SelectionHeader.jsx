import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserHistory } from 'react-router';

import '../Index/IndexHeader/IndexHeader.css';

class SelectionHeader extends Component {
  render() {
    return (
      <div className="IndexHeader">
        <Link to="/permanent">
          <i className="fa fa-arrow-left fa-lg" aria-hidden="true" />
        </Link>
        <nav>
          <i className="fa fa-language fa-lg " aria-hidden="true" />
          <i className="fa fa-star-o fa-lg" aria-hidden="true" />
          <i className="fa fa-map-o fa-lg" aria-hidden="true" />
          <i className="fa fa-search fa-lg" aria-hidden="true" />
        </nav>
      </div>
    );
  }
}

export default SelectionHeader;
