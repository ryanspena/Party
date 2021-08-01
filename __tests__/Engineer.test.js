var Engineer = require('../lib/Engineer');

test('', () => {
  test('get engineer github', () => {
    var testValue = 'githubUser';
    var event = new Engineer('me', 1, 'ryan@me.com', testValue);

    expect(event.getGithub()).toBe(testValue);
  });

  test('', () => {
    var testValue = 'Engineer';
    var event = new Engineer('me', 1, 'ryan@you.com', 'githubUser');

    expect(event.getRole()).toBe(testValue);
  });
});
