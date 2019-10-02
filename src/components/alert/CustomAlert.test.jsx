import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CustomAlert from './CustomAlert';

describe('CustomAlert', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(
      <CustomAlert isShown="isTweet" variant="success" message="test" />,
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
