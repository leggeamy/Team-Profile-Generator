const Employee = require("../lib/Employee");
const { TestScheduler } = require("jest");

// can make a new employee instance (object)
test("Can make a new employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});
// *Properties
// can set employee name
test("Can set employee name", () => {
    const name= "Alex";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// can set employee ID
test("Can set employee id", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

// can set employee email
test("Can set up employee email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// *Methods
// can get name with getName()

// can get ID with getId()

// can get email with getEmail()

// can get role with getRole()