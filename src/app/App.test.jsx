import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { create, act } from 'react-test-renderer';

import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', () => {
  let wrapper;
  test('renders without crashing', () => {
    act(() => {
      wrapper = create(<App />, container);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
