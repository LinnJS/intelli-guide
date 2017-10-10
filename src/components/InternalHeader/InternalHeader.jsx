import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import '../IndexHeader/IndexHeader.css';
// import head from './daliHead.svg'

class IndexHeader extends Component {
  render() {
    return (
      <div className="IndexHeader">
        <Link to="/">
          <i class="fa fa-arrow-left fa-lg" aria-hidden="true" />
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

export default IndexHeader;
