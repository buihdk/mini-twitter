import { noop } from '.';

describe('noop', () => {
  test('invokes noop without crashing', () => {
    noop();
  });
});
