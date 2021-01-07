import MenuItem from '../../components/MenuItem';
import { mountRender } from '../setup';

describe('Menu Item', () => {
  const props = {
    name: 'Test',
    url: '/test',
    Icon: () => '<i>icon</i>',
  };

  const page = mountRender(MenuItem, { ...props });

  test('should render menu item', async () => {
    expect(page).toBeTruthy();
  });

  test('should render text', () => {
    const link = page.find('a');
    expect(link.text()).toMatch(props.name);
  });

  test('should have href value', () => {
    const link = page.find('a');
    expect(link.getElement().props.href).toEqual(props.url);
  });
});
