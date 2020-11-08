const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//can set office number
test("Can set office number of new manager", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

//getRole should return "manager"
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

//can get office number with getOfficeNumber
test("Can get office number with getOfficeNumber", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});