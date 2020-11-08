const Employee = require("../lib/Employee");

// can make a new employee instance (object)
test("Can make a new employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

// *Testing Properties

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

// *Testing Methods

// can get name with getName()
test("can get name with getName()", () => {
const testValue = "Alex";
const e = new Employee(testValue);
expect(e.getName()).toBe(testValue);
});

// can get ID with getId()
test("can get id with getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// can get email with getEmail()
test("can get email with getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// can get role with getRole()
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Foo, 1, test@test.com");
    expect(e.getRole()).toBe(testValue);
});