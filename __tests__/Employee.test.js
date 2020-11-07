const Employee = require("../lib/Employee");
const { TestScheduler } = require("jest");

// can make a new employee instance (object)
test("Can make a new employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

// can set employee name

// can set employee ID

// can set employee email

// can get name with getName()

// can get ID with getId()

// can get email with getEmail()

// can get role with getRole()