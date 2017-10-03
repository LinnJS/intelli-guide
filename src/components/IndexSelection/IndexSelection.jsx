import React, { Component } from 'react'
import styles from './IndexSelection.css'
import IndexHeader from '../IndexHeader/IndexHeader'
import daliFooter from './assets/daliFooter.svg'

class IndexSelection extends Component {
  render() {
    return (
      <div className="IndexSelection">
        <IndexHeader />
        <div className="wrapper">
          <section className="permanent">
            <div className="indexText">
              <span>permanent collection tour</span>
              <h3>the works of dali</h3>
            </div>
          </section>
          <section className="expedition">
            <div className="indexText">
              <span>expedition tour</span>
              <h3>expedition tour</h3>
            </div>
          </section>
          <section className="architecture">
            <div className="indexText">
              <span>understanding the enigma</span>
              <h3>architecture tour</h3>
            </div>
          </section>
          <section className="family">
            <div className="indexText">
              <span>decode the imagination</span>
              <h3>family tours</h3>
            </div>
          </section>
        </div>
        <footer>
          <img src={daliFooter} alt="Dali Footer Branding" />
        </footer>
      </div>
    )
  }
}

export default IndexSelection
