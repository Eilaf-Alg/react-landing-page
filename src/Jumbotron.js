import React from 'react';
import Button from './Button'

const Jumbotron = (prop) => {
    return (
      <div className="Jumbotron jumbotron"
      style={{backgroundImage: `url('${prop.img}')` }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7 mx-auto">
                  <h1>This is the jumbotron</h1>
                  <div className="form-row align-items-center">
                      <div className="col">
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-auto">
                        <Button>Sign up!</Button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Jumbotron;