import React from 'react';
import App from './App';

describe('App component', () => {
  it('should not be undefined', () => {
    const instace = <App />;
    expect(instace).not.toBe(undefined);
  });
});
