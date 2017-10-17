import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Index.css';
import IndexHeader from './IndexHeader/IndexHeader';
import daliFooter from '../../assets/daliFooter.svg';
import '../ListView/ListView';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <IndexHeader />
        <div className="wrapper">
          <section className="permanent">
            <Link to="/permanent">
              <div className="indexText">
                <span>permanent collection tour</span>
                <h3>the works of dali</h3>
              </div>
            </Link>
          </section>
          {/* <section className="expedition">
            <Link to="/expedition">
              <div className="indexText">
                <span>expedition tour</span>
                <h3>expedition tour</h3>
              </div>
            </Link>
          </section>
          <section className="architecture">
            <Link to="/architecture">
              <div className="indexText">
                <span>understanding the enigma</span>
                <h3>architecture tour</h3>
              </div>
            </Link>
          </section>
          <section className="family">
            <Link to="/family">
              <div className="indexText">
                <span>decode the imagination</span>
                <h3>family tours</h3>
              </div>
            </Link>
          </section> */}
        </div>
        <footer>
          <img src={daliFooter} alt="Dali Footer Branding" />
        </footer>
      </div>
    );
  }
}

export default Index;
