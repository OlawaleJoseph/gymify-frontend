import NextAppointment from '../../components/NextAppointment';
import { shallowRender } from '../setup';

describe('Side Bar', () => {
  const props = {
    title: 'Title',
    desc: 'Desc',
    duration: 300,
    id: 'id',
  };
  const page = shallowRender(NextAppointment, props);

  test('should render menu item', async () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
