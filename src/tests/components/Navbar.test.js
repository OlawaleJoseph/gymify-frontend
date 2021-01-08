import Nav from '../../components/Nav';
import { mountRender } from '../setup';

describe('Side Bar', () => {
  const page = mountRender(Nav);

  test('should render menu item', async () => {
    expect(page).toBeTruthy();
  });

  test('should render logout icon', () => {
    const link = page.find('.nav__logout');
    expect(link.length).toBeTruthy();
  });
});
