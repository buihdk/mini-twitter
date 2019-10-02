import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

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
  act(() => {
    wrapper = mount(<App />, container);
  });

  test('renders snow animation without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders rain animation without crashing', () => {
    wrapper.find('#toggle').simulate('click');

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
