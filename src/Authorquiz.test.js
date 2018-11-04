import React from 'react';
import ReactDOM from 'react-dom';
import Authorquiz from './Authorquiz';

function Hello(props) {
  return <h1> Hello {props.name} </h1>
}

describe('Hello', () => {
  let result;
  beforeAll(() => {
    result = Hello({name: "Eric"})
  });

  it('should render', () => {
    expect(result.type).toBe("h1");
    expect(result.props.children).toBeTruthy();
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authorquiz />, div);
});
