const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e =new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor argument", () => {
  const name = "Ed";
  const e =new Employee();
  expect(e.name).toBe(name);
});

test("Can email via constructor arguement", () => {
  const testValue = 100;
  const e =new Employee("Ed", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor", () => {
  const testValue = "test@test.com";
  const e =new Employee("Ed", 1, testValue);
  expect(typeof(e)).toBe("testValue");
});

test("Can get name via getName", () => {
  const testValue = "Ed";
  const e =new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId", () => {
  const testValue = "10";
  const e =new Employee("Ed", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get id via getEmail", () => {
  const testValue = "test@test.com";
  const e =new Employee("Ed", 10, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get id via getEmail", () => {
  const testValue = "test@test.com";
  const e =new Employee("Ed", 10, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get id via getRole", () => {
  const testValue = "test";
  const e =new Employee("Ed", 10, testValue);
  expect(e.getRole()).toBe(testValue);
});