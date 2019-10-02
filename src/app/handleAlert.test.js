import handleAlert from './handleAlert';

const setAlert = jest.fn();

describe('handleAlert', () => {
  test('works as expected', done => {
    handleAlert({ type: 'isTweet', setAlert });

    expect(setAlert).toHaveBeenCalled();
    expect(setAlert).toHaveBeenCalledWith('isTweet');

    setTimeout(() => {
      expect(setAlert).toHaveBeenCalledWith('');
      done();
    }, 2000);
  });
});
