import React from 'react';
import ReactDOM from 'react-dom';
import Authorquiz from './Authorquiz';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let model = { clicks: 0 }
function render() {
  ReactDOM.render(
    <Authorquiz/>,
    document.getElementById('root')
  );
}
render();
