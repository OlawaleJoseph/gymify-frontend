import SideBar from '../../components/SideBar';
import { mountRender } from '../setup';

describe('Side Bar', () => {
  const page = mountRender(SideBar);

  test('should render menu item', async () => {
    expect(page).toBeTruthy();
  });

  test('should render links', () => {
    const links = page.find('a');
    expect(links.length).toBeTruthy();
  });

  test('should render profile image', () => {
    const image = page.find('img');
    expect(image).toBeTruthy();
  });

  test('should render profile name', () => {
    const profileName = page.find('h4');
    expect(profileName.length).toBeTruthy();
  });
});
