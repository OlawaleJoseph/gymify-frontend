import { shallowRender } from '../setup';
import Appointments from '../../pages/Appointments';

describe('Appointments', () => {
  const page = shallowRender(Appointments);

  test('Should render Appointments', () => {
    expect(page).toBeTruthy();
    expect(page).not.toBeFalsy();
    expect(page).toMatchSnapshot();
  });
});
