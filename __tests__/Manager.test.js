var Manager = require('../lib/Manager.js');

test('', () => {
  var manager = new Manager('Shea', 0, 'BestBelieveItsNotButter@shea.com');

  expect(manager.name).toBe('Shea');
  expect(manager.id).toBe(0);
  expect(manager.email).toBe('BestBelieveItsNotButter@shea.com');
  expect(manager.getName()).toBe('Shea');
  expect(manager.getId()).toBe(0);
  expect(manager.getEmail()).toBe('BestBelieveItsNotButter@shea.com');
});

test('', () => {
  var manager = new Manager('Coconut The 5th', 3, 'seanflemings@utc.com', 2058);

  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test('', () => {
  var manager = new Manager('Torree', 4, 'utcbootcamp@whatis.com', 1);

  expect(manager.role).toBe('Manager');
});
