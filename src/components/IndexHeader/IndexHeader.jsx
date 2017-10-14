import React, { Component } from 'react';
<<<<<<< HEAD
import { slide as Menu } from 'react-burger-menu';

=======
>>>>>>> justin
import './IndexHeader.css';
// import head from './daliHead.svg'

class IndexHeader extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="IndexHeader">
        <div>
          {/* <Menu /> */}
          <i className="fa fa-cog fa-lg" aria-hidden="true" />
        </div>
        <a onClick={this.showSettings} className="menu-item--small" href="" />
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
