import { getActiveUser, getUser, returnArray, sayHello } from "../src/base-test/test";

describe('Demo test', () => {
  test('Testing', () => {
    const name = 'Gasti';
    const message = sayHello(name);

    expect(message).toBe(`Hola ${name}`);
  });

  test('getUser', () => {
    const testUser = {
      uid: 'abc',
      username: 'test'
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test('getActiveUser', () => {
    const name = 'test';

    const user = getActiveUser();

    expect(user).toEqual({
      uid: 'abc',
      username: name,
    });
  });

  test('testArray', () => {
    const [letters, numbers] = returnArray();

    expect(letters).toBe('abc');
    expect(numbers).toBe(123);
  });
});
