import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Snow from './Snow';

describe('Snow', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Snow />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
