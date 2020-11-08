const Intern = require("../lib/Intern");

//can set school for new Intern
test("can set school for new intern", () => {
const testValue = "NYU";
const e = new Intern("Foo", 1, "test@test.com", testValue);
expect(e.school).toBe(testValue);
});

//getRole() should return "intern"
test("getRole() should return 'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern ("Foo", 1, "test@test.com", "NYU");
    expect(e.getRole()).toBe(testValue);
});

//can get school name with getSchool()
test("can get school name with getSchool()", () => {
    const testValue = "NYU";
    const e = new Intern ("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});


