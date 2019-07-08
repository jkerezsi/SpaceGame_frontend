import React from 'react';
import ReactDOM from 'react-dom';
import Kingdom from './Components/menu/kingdom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kingdom />, div);
  ReactDOM.unmountComponentAtNode(div);
});
