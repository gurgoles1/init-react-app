import React, { Component } from 'react';
import logo from './logo.svg';
import './Authorquiz.css';

function Hero() {
  return (<div className="row">
      <div clasName="jumbotron col-10 offset-1">
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown</p>
      </div>
    </div>
);
}

function Turn() {

}

function Continue() {

}

class Authorquiz extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Hero/>
          <Turn/>
          <Continue/>
      </div>
    );
  }
}

export default Authorquiz;
