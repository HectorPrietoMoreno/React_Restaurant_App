import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './NotFoundPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFoundPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
