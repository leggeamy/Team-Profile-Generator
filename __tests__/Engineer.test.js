const Engineer = require("../lib/Engineer");

//can set GitHub account for new Engineer
test("Can set GitHub account for new Engineer", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

//getRole() should return "Engineer"
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
})

//can get get GitHub username with getGithub
test("can get GitHub username with getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});