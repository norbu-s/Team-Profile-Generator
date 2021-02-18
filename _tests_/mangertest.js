const Manager = require("../lib/Employee");
const Manager = require("../lib/Manager");

// test for Manager

test("should return an object containing 4 properties", () => {
  const managerProperties = new Manager(
    "Foo",
    1,
    "test@test.com",
    "0123456789"
  );
  expect(managerProperties);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const managerProperties = new Manager(
    "Foo",
    1,
    "test@test.com",
    "0123456789",
    testValue
  );
  expect(managerProperties.getRole()).tobe(tesetValue);
});
