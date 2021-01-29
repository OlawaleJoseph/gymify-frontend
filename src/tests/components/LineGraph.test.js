import Graph from '../../components/LineGraph';
import { shallowRender } from '../setup';

describe('Side Bar', () => {
  const props = {
    dataArr: [1, 2, 3, 4, 5],
  };
  const page = shallowRender(Graph, props);

  test('should render menu item', async () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
