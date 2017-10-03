import React, { Component } from 'react'
import daliFooter from './assets/daliFooter.svg'

class IndexSelection extends Component {
  render() {
    return (
      <div className="IndexSelection">
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
              <span>explore imagination, crack the code</span>
              <h3>family tours</h3>
            </div>
          </section>
        </div>
        <footer>
          <img src={daliFooter} alt="" />
        </footer>
      </div>
    )
  }
}

export default IndexSelection
