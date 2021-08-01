const Engineer = require("../lib/Engineer.js");

test(() => {
    const engineer = new Engineer("Ryan", 5, "psrated@gmail.com");

    expect(engineer.name).toBe("Ryan");
    expect(engineer.id).toBe(5);
    expect(engineer.email).toBe("psrated@gmail.com");
    expect(engineer.getName()).toBe("Ryan");
    expect(engineer.getId()).toBe(5);
    expect(engineer.getEmail()).toBe("psrated@gmail.com");
});

test(() => {
    const engineer = new Engineer("Shea", 6, "ryanshea@pena.com", "ryanspena");

    expect(engineer.github).toBe("ryanspena");
    expect(engineer.getGithub()).toBe("ryanspena");
});

test(() => {
    const engineer = new Engineer("Pena", 7, "ryanspena@home.com", "psrated");

    expect(engineer.role).toBe("Engineer");
    expect(engineer.getRole()).toBe("Engineer");
});