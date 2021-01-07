import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Register from '../../pages/Register';

const ini = {
  auth: {
    user: {},
    client: '',
    uid: '',
    expiry: '',
    token: '',
    isLoading: false,
    error: '',
  },
};

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({ ...ini });

const changeInputText = async (element, value = '') => {
  await act(async () => {
    fireEvent.change(element, { target: { value } });
    fireEvent.blur(element);
  });
};

const getById = (container, id) => container.querySelector(`#${id}`);

describe('Sign up Page', () => {
  let errorMessage;
  describe('User Registration', () => {
    let container;
    let firstNameInput;
    // let lastNameInput;
    // let emailInput;
    // let confirmPasswordInput;
    // let passwordInput;
    // let usernameInput;
    // beforeAll(() => {
    //   ({ container } = render(
    //     <Provider store={store}>
    //       <BrowserRouter>
    //         <Register />
    //       </BrowserRouter>
    //     </Provider>,
    //   ));
    //   firstNameInput = getById(container, 'firstName');
    // });

    //     let component: any;
    // await act(async () => {
    //   component = create(
    //     <MockedProvider>
    //       <SelectAccountScreen {...props} />
    //     </MockedProvider>,
    //   );
    // });

    it('should validate presence of first name', async () => {
      await act(async () => {
        ({ container } = render(
          <Provider store={store}>
            <BrowserRouter>
              <Register />
            </BrowserRouter>
          </Provider>,
        ));
      });
      // const { container } = render(
      //   <Provider store={store}>
      //     <BrowserRouter>
      //       <Register />
      //     </BrowserRouter>
      //   </Provider>,
      // );
      firstNameInput = getById(container, 'firstName');
      // await changeInputText(firstNameInput);

      errorMessage = 'First Name is required';

      expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    });

    //   test('should validate length of first name', async () => {
    //     await changeInputText(firstNameInput, 'ab');

    //     errorMessage = 'First Name must have at least 3 characters';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate presence of last name', async () => {
    //     await changeInputText(lastNameInput);

    //     errorMessage = 'Last Name is required';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate length of last name', async () => {
    //     await changeInputText(lastNameInput, 'ab');

    //     errorMessage = 'Last Name must have at least 3 characters';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate email presence', async () => {
    //     await changeInputText(emailInput);

    //     errorMessage = 'Email is required';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should be a valid email', async () => {
    //     await changeInputText(emailInput, 'email');

    //     errorMessage = 'Invalid email';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate presence of password', async () => {
    //     await changeInputText(passwordInput, '');

    //     errorMessage = 'Password is required';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate length of password', async () => {
    //     await changeInputText(passwordInput, 'pass');

    //     errorMessage = 'Password must have at least 6 characters';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate password pattern', async () => {
    //     await changeInputText(passwordInput, 'password');

    //     errorMessage = 'Password must have at least one uppercase, lowercase, and digit';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate presence of confirm password', async () => {
    //     await changeInputText(confirmPasswordInput);

    //     errorMessage = 'Confirm password is required';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });

    //   test('should validate equality of password and confirm password', async () => {
    //     const passwordInput = getByLabelText('Password');
    //     const confirmPasswordInput = getByLabelText('Confirm Password');

    //     fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    //     await changeInputText(confirmPasswordInput, 'Password12');

    //     errorMessage = 'Passwords do not match';

    //     expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
    //   });
  });

  // describe('Trainer', () => {
  //   let getByLabelText; let container; let firstNameInput; let lastNameInput; let emailInput; let confirmPasswordInput; let
  //     passwordInput;

  //   describe('Validation', () => {
  //     beforeEach(() => {
  //       ({ getByLabelText, container } = render(
  //         <BrowserRouter>
  //           <SignUpPage />
  //         </BrowserRouter>,
  //       ));
  //       firstNameInput = getByLabelText('First Name');
  //       lastNameInput = getByLabelText('Last Name');
  //       emailInput = getByLabelText('Email');
  //       passwordInput = getByLabelText('Password');
  //       confirmPasswordInput = getByLabelText('Confirm Password');
  //     });
  //     test('should validate presence of first name', async () => {
  //       await changeInputText(firstNameInput);

  //       errorMessage = 'First Name is required';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate length of first name', async () => {
  //       await changeInputText(firstNameInput, 'ab');

  //       errorMessage = 'First Name must have at least 3 characters';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate presence of last name', async () => {
  //       await changeInputText(lastNameInput);

  //       errorMessage = 'Last Name is required';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate length of last name', async () => {
  //       await changeInputText(lastNameInput, 'ab');

  //       errorMessage = 'Last Name must have at least 3 characters';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate email presence', async () => {
  //       await changeInputText(emailInput);

  //       errorMessage = 'Email is required';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should be a valid email', async () => {
  //       await changeInputText(emailInput, 'email');

  //       errorMessage = 'Invalid email';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate presence of password', async () => {
  //       await changeInputText(passwordInput, '');

  //       errorMessage = 'Password is required';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate length of password', async () => {
  //       await changeInputText(passwordInput, 'pass');

  //       errorMessage = 'Password must have at least 6 characters';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate password pattern', async () => {
  //       await changeInputText(passwordInput, 'password');

  //       errorMessage = 'Password must have at least one uppercase, lowercase, and digit';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate presence of confirm password', async () => {
  //       await changeInputText(confirmPasswordInput);

  //       errorMessage = 'Confirm password is required';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });

  //     test('should validate equality of password and confirm password', async () => {
  //       const passwordInput = getByLabelText('Password');
  //       const confirmPasswordInput = getByLabelText('Confirm Password');

  //       fireEvent.change(passwordInput, { target: { value: 'Password123' } });
  //       await changeInputText(confirmPasswordInput, 'Password12');

  //       errorMessage = 'Passwords do not match';

  //       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  //     });
  //   });
  // });
});
