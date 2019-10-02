import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Tweet from './Tweet';

const tweet = {
  text: 'test',
  liked: false,
  date: new Date().toISOString(),
};
const likedTweet = { ...tweet, liked: true };
const handleRetweet = jest.fn();
const handleLike = jest.fn();
const handleDelete = jest.fn();

let wrapper;

afterEach(() => {
  wrapper = null;
});

afterAll(() => {
  handleRetweet.mockClear();
  handleLike.mockClear();
  handleDelete.mockClear();
});

describe('Tweet', () => {
  describe('empty props', () => {
    test('renders without crashing', () => {
      wrapper = shallow(<Tweet />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('with props', () => {
    test('renders without crashing', () => {
      wrapper = shallow(<Tweet tweet={tweet} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    test('renders liked tweet without crashing', () => {
      wrapper = shallow(<Tweet tweet={likedTweet} />);

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    test('handleRetweet', () => {
      wrapper = mount(<Tweet tweet={tweet} handleRetweet={handleRetweet} />);
      wrapper.find('.fa-retweet').simulate('click');

      expect(handleRetweet).toBeCalledWith(tweet);
    });

    test('handleLike', () => {
      wrapper = mount(<Tweet tweet={tweet} handleLike={handleLike} />);
      wrapper.find('.fa-heart').simulate('click');

      expect(handleLike).toBeCalledWith(tweet);
    });

    test('handleLike', () => {
      wrapper = mount(<Tweet tweet={tweet} handleDelete={handleDelete} />);
      wrapper.find('.fa-trash-alt').simulate('click');

      expect(handleDelete).toBeCalledWith(tweet);
    });
  });
});
