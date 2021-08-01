const Team = require('../lib/Team.js');

test(() => {
  const team = new Team();

  expect(team.idTracker).toBe(0);
  expect(Array.isArray(team.employees)).toBeTruthy();
  expect(team.employees.length).toBe(0);
});

test(() => {
  const team = new Team();

  expect(team.getNewId()).toBe(0);
  expect(team.idTracker).toBe(1);
});

test(() => {
  const team = new Team();

  expect(team.getEmployees()).toEqual([]);
});

test(() => {
  const team = new Team();

  team.addEmployee({ name: 'Gaga', email: 'pokerface@lmao.com' });

  expect(team.employees.length).toBe(1);
  expect(team.employees[0]).toEqual({
    name: 'Gaga',
    email: 'pokerface@lol.com',
  });
});
