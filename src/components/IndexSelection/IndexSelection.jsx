import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import styles from './IndexSelection.css';
import IndexHeader from '../IndexHeader/IndexHeader';
import daliFooter from '../../assets/daliFooter.svg';
import ListView from '../ListView/ListView';

class IndexSelection extends Component {
  render() {
    return (
      <div className="IndexSelection">
        <Switch>
          {/* <Route exact path="/" component={IndexSelection} /> */}
          <Route exact path="/perminant" component={ListView} />
          <Route exact path="/expedition" component={ListView} />
          <Route exact path="/architecture" component={ListView} />
          <Route path="/family" component={ListView} />
        </Switch>
        <IndexHeader />
        <div className="wrapper">
          <section className="permanent">
            <Link to="perminant/ListView">
              <div className="indexText">
                <span>permanent collection tour</span>
                <h3>the works of dali</h3>
              </div>
            </Link>
          </section>
          <section className="expedition">
            <Link to="expedition/ListView">
              <div className="indexText">
                <span>expedition tour</span>
                <h3>expedition tour</h3>
              </div>
            </Link>
          </section>
          <section className="architecture">
            <Link to="architecture/ListView">
              <div className="indexText">
                <span>understanding the enigma</span>
                <h3>architecture tour</h3>
              </div>
            </Link>
          </section>
          <section className="family">
            <Link to="family/ListView">
              <div className="indexText">
                <span>decode the imagination</span>
                <h3>family tours</h3>
              </div>
            </Link>
          </section>
        </div>
        <footer>
          <img src={daliFooter} alt="Dali Footer Branding" />
        </footer>
      </div>
    );
  }
}

export default IndexSelection;
