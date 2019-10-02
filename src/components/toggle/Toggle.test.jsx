import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Toggle from './Toggle';

describe('Toggle', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Toggle />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
