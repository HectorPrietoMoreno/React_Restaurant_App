import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './BasicComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
