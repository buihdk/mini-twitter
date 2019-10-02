import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import TweetBox from './TweetBox';

const handleAlert = jest.fn();
const setAlert = jest.fn();

describe('TweetBox', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(
      <TweetBox handleAlert={handleAlert} setAlert={setAlert} />,
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
