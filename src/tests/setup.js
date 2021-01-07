/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

export const shallowRender = (Element, props = {}) => (
  shallow(
    <Provider store={store}>
      <BrowserRouter>
        <Element {...props} />
      </BrowserRouter>
    </Provider>,
  )
);

export const mountRender = (Element, props = {}) => (
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <Element {...props} />
      </BrowserRouter>
    </Provider>,
  )
);

export const renderWrapper = (Element, props = {}) => {
  const { getByLabelText, container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Element {...props} />
      </BrowserRouter>
    </Provider>,
  );
  return { getByLabelText, container };
};
