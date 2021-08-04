var Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
  const engineer = new Engineer('me', '007', 'ryan@me.com', 'psrated');

  expect(engineer.name).toBe('me');
  expect(engineer.id).toBe('007');
  expect(engineer.email).toBe('ryan@me.com');
  expect(engineer.gitHub).toBe('psrated');
});

test('gets engineer username', () => {
  const engineer = new Engineer('me', '007', 'ryan@me.com', 'psrated');

  expect(engineer.getGitHub()).toEqual(expect.stringContaining('psrated'));
  expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
  const engineer = new Engineer('me', '007', 'ryan@me.com', 'psrated');

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
  expect(engineer.getRole()).toEqual(expect.any(String));
});
