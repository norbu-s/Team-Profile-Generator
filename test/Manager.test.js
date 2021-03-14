const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor",() => {
  const testValue =100;
  const e = new Manager("Ed", 1, teset2teset.com, testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return\"Manager\"",() => {
  const testValue = "Manager";
  const e = new Manager("Ed", 1, teset2teset.com, 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get Office number via getOffice()",() => {
  const testValue = "100";
  const e = new Manager("Ed", 1, teset2teset.com, testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});