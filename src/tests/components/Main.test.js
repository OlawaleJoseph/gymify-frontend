import Main from '../../components/Main';
import Nav from '../../components/Nav';
import NextAppointment from '../../components/NextAppointment';
import Timer from '../../components/Timer';
import Graph from '../../components/LineGraph';
import { mountRender } from '../setup';

describe('Main', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => ({
      useDispatch: jest.fn(),
    }));
  });

  const props = {
    dataArr: [1, 2, 3, 4, 5],
  };
  const page = mountRender(Main, props);

  test('should render page', async () => {
    console.log(page.debug());
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });

  test('should render next appointment', async () => {
    const appoinment = page.find('.nextAppointment');
    expect(appoinment.length).toBeTruthy();
    expect(appoinment.length).not.toBeFalsy();
  });

  test('should render LineGraph', async () => {
    const graph = page.find('.lineGraph');
    expect(graph.length).toBeTruthy();
    expect(graph.length).not.toBeFalsy();
  });
});
