import Trainers from '../../containers/Trainers';
import { mountRender } from '../setup';

describe('Side Bar', () => {
  const page = mountRender(Trainers);

  test('should render trainers', () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
