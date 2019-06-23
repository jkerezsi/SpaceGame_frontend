import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldSimple from './Components/HelloWorldSimple/HelloWorldSimple';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloWorldSimple />, div);
  ReactDOM.unmountComponentAtNode(div);
});
