import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Posts from '../components/Posts';
import SinglePost from '../components/SinglePost';

test('Check if Home is rendering correctly', () => {
  const body = document.createElement('tbody');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});
test('Check if Details is rendering correctly', () => {
  const body = document.createElement('tbody');
  const post = {
    id: 5,
    userId: 5,
    title: '1000',
    body: 'aannn',
  };
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <SinglePost post={post} />
      </BrowserRouter>
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});
