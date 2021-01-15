import { shallowRender } from '../setup';
import Trainer from '../../pages/Trainer';

describe('Homepage', () => {
  const page = shallowRender(Trainer);

  test('Should render Homepage', () => {
    expect(page).toBeTruthy();
    expect(page).not.toBeFalsy();
    expect(page).toMatchSnapshot();
  });
});
