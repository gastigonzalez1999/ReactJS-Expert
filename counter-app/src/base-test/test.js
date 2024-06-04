export function sayHello(name) {
  return 'Hey' + name;
}

export const getUser = () => ({
  uid: 'abc',
  username: 'test'
});

export const getActiveUser = (name) => ({
  uid: 'abc',
  username: name,
});

export const returnArray = () => {
  return ['abc', 123];
};
