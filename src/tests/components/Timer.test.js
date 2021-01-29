import Timer from '../../components/Timer';
import { shallowRender } from '../setup';

describe('Side Bar', () => {
  const props = {
    timeFrame: 600,
  };
  const page = shallowRender(Timer, props);

  test('should render menu item', async () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
