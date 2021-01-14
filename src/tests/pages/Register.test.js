// import { fireEvent } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import Register from '../../pages/Register';
// import { renderWrapper, getById, changeInputText } from '../setup';

// describe('Sign up Page', () => {
//   let errorMessage;
//   describe('User Registration', () => {
//     let container;
//     let firstNameInput;
//     let lastNameInput;
//     let emailInput;
//     let confirmPasswordInput;
//     let passwordInput;
//     let usernameInput;
//     beforeEach(async () => {
//       await act(async () => {
//         ({ container } = await renderWrapper(Register));
//       });
//     });
//     it('should validate presence of first name', async () => {
//       firstNameInput = await getById(container, 'firstName');
//       await changeInputText(firstNameInput);

//       errorMessage = 'First Name is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of first name', async () => {
//       firstNameInput = await getById(container, 'firstName');

//       await changeInputText(firstNameInput, 'ab');

//       errorMessage = 'First Name must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of last name', async () => {
//       lastNameInput = await getById(container, 'lastName');

//       await changeInputText(lastNameInput);

//       errorMessage = 'Last Name is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of last name', async () => {
//       lastNameInput = await getById(container, 'lastName');
//       await changeInputText(lastNameInput, 'ab');

//       errorMessage = 'Last Name must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate email presence', async () => {
//       emailInput = await getById(container, 'email');
//       await changeInputText(emailInput);

//       errorMessage = 'Email is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should be a valid email', async () => {
//       emailInput = await getById(container, 'email');
//       await changeInputText(emailInput, 'email');

//       errorMessage = 'Invalid email';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of Username', async () => {
//       usernameInput = await getById(container, 'username');

//       await changeInputText(usernameInput);

//       errorMessage = 'Username is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of Username', async () => {
//       usernameInput = await getById(container, 'username');
//       await changeInputText(usernameInput, 'ab');

//       errorMessage = 'Username must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of password', async () => {
//       passwordInput = await getById(container, 'password');
//       await changeInputText(passwordInput, '');

//       errorMessage = 'Password is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of password', async () => {
//       passwordInput = await getById(container, 'password');
//       await changeInputText(passwordInput, 'pass');

//       errorMessage = 'Password must have at least 6 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate password pattern', async () => {
//       passwordInput = await getById(container, 'password');
//       await changeInputText(passwordInput, 'password');

//       errorMessage = 'Password must have at least one uppercase, lowercase, and digit';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of confirm password', async () => {
//       confirmPasswordInput = await getById(container, 'confirmPassword');
//       await changeInputText(confirmPasswordInput);

//       errorMessage = 'Confirm password is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate equality of password and confirm password', async () => {
//       const passwordInput = getById(container, 'password');
//       const confirmPasswordInput = getById(container, 'confirmPassword');

//       await act(() => {
//         fireEvent.change(passwordInput, { target: { value: 'Password123' } });
//       });
//       await changeInputText(confirmPasswordInput, 'Password12');

//       errorMessage = 'Passwords do not match';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });
//   });

//   describe('User Registration', () => {
//     let container;
//     let firstNameInput;
//     let lastNameInput;
//     let emailInput;
//     let confirmPasswordInput;
//     let passwordInput;
//     let usernameInput;
//     let trainerInput;
//     let specialityInput;
//     let infoInput;

//     beforeEach(async () => {
//       await act(async () => {
//         ({ container } = await renderWrapper(Register));
//       });

//       trainerInput = getById(container, 'isTrainer');
//     });

//     it('should validate presence of first name', async () => {
//       firstNameInput = await getById(container, 'firstName');
//       await changeInputText(firstNameInput);

//       errorMessage = 'First Name is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of first name', async () => {
//       firstNameInput = await getById(container, 'firstName');

//       await changeInputText(firstNameInput, 'ab');

//       errorMessage = 'First Name must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of last name', async () => {
//       lastNameInput = await getById(container, 'lastName');

//       await changeInputText(lastNameInput);

//       errorMessage = 'Last Name is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of last name', async () => {
//       lastNameInput = await getById(container, 'lastName');
//       await changeInputText(lastNameInput, 'ab');

//       errorMessage = 'Last Name must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate email presence', async () => {
//       emailInput = await getById(container, 'email');
//       await changeInputText(emailInput);

//       errorMessage = 'Email is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should be a valid email', async () => {
//       emailInput = await getById(container, 'email');
//       await changeInputText(emailInput, 'email');

//       errorMessage = 'Invalid email';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of Username', async () => {
//       usernameInput = await getById(container, 'username');

//       await changeInputText(usernameInput);

//       errorMessage = 'Username is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of Username', async () => {
//       usernameInput = await getById(container, 'username');
//       await changeInputText(usernameInput, 'ab');

//       errorMessage = 'Username must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of password', async () => {
//       passwordInput = await getById(container, 'password');
//       await changeInputText(passwordInput, '');

//       errorMessage = 'Password is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of password', async () => {
//       passwordInput = await getById(container, 'password');
//       await changeInputText(passwordInput, 'pass');

//       errorMessage = 'Password must have at least 6 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate password pattern', async () => {
//       passwordInput = await getById(container, 'password');
//       await changeInputText(passwordInput, 'password');

//       errorMessage = 'Password must have at least one uppercase, lowercase, and digit';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of confirm password', async () => {
//       confirmPasswordInput = await getById(container, 'confirmPassword');
//       await changeInputText(confirmPasswordInput);

//       errorMessage = 'Confirm password is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate equality of password and confirm password', async () => {
//       const passwordInput = getById(container, 'password');
//       const confirmPasswordInput = getById(container, 'confirmPassword');

//       await act(() => {
//         fireEvent.change(passwordInput, { target: { value: 'Password123' } });
//       });
//       await changeInputText(confirmPasswordInput, 'Password12');

//       errorMessage = 'Passwords do not match';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of speciality', async () => {
//       await act(() => {
//         fireEvent.click(trainerInput);
//       });
//       specialityInput = await getById(container, 'speciality');
//       await changeInputText(specialityInput, '');

//       errorMessage = 'Speciality is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of speciality', async () => {
//       await act(() => {
//         fireEvent.click(trainerInput);
//       });
//       specialityInput = await getById(container, 'speciality');
//       await changeInputText(specialityInput, 'qa');

//       errorMessage = 'Speciality must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate presence of info', async () => {
//       await act(() => {
//         fireEvent.click(trainerInput);
//       });
//       infoInput = await getById(container, 'info');
//       await changeInputText(infoInput, '');

//       errorMessage = 'Info is required';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });

//     test('should validate length of info', async () => {
//       await act(() => {
//         fireEvent.click(trainerInput);
//       });
//       infoInput = await getById(container, 'info');
//       await changeInputText(infoInput, 'qa');

//       errorMessage = 'Info must have at least 3 characters';

//       expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
//     });
//   });
// });
