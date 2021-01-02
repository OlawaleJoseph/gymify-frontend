/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

export const shallowWrapper = (Element, props = {}) => shallow(<Element {...props} />);
export const mountWrapper = (Element, props = {}) => mount(<Element {...props} />);
