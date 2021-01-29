import Trainer from '../../components/TrainerCard';
import { mountRender } from '../setup';

describe('Side Bar', () => {
  const props = {
    id: 'id',
    imgUrl: 'imageurl',
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    speciality: 'speciality',
  };
  const page = mountRender(Trainer, props);

  test('should render trainer', () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });

  test('should render a link with trainer id as params', () => {
    const link = page.find('a');

    expect(link).toBeTruthy();
    expect(link.props().href).toEqual(`/trainers/${props.id}`);
  });

  test('should render profile card', () => {
    const card = page.find('.profile-card');

    expect(card).toBeTruthy();
  });

  test('should display trainer image', () => {
    const image = page.find('img');

    expect(image).toBeTruthy();
    expect(image.length).toBe(1);
    expect(image.props().src).toEqual(props.imgUrl);
  });

  test('should display trainer first name and last name', () => {
    const name = page.find('.profile-name');

    expect(name).toBeTruthy();
    expect(name.length).toBe(1);
    expect(name.text()).toEqual(`${props.firstName} ${props.lastName}`);
  });

  test('should display trainer username', () => {
    const username = page.find('.profile-username');

    expect(username).toBeTruthy();
    expect(username.length).toBe(1);
    expect(username.text()).toEqual(props.username);
  });

  test('should display trainer speciality', () => {
    const speciality = page.find('.profile-speciality');

    expect(speciality).toBeTruthy();
    expect(speciality.length).toBe(1);
    expect(speciality.text()).toEqual(props.speciality);
  });
});
