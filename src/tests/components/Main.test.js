import Main from '../../components/Main';
import { mountRender } from '../setup';
// import 'jest-canvas-mock';

describe('Main', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => ({
      useDispatch: jest.fn(),
    }));
    window.HTMLCanvasElement.prototype.getContext = jest.fn();
  });

  const props = {
    dataArr: [1, 2, 3, 4, 5],
  };
  const page = mountRender(Main, props);

  test('should render page', async () => {
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
