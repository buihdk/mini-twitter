import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Rain from './Rain';

describe('Rain', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Rain />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
