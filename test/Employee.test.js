const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should return an object with 4 properties", () => {
    const obj = new Employee("test","100","testtest.com","1234567890");

describe("getName()")
    it("Returns the name of the Employee", () => {
      const obj = Employee.getName();
  
      expect(obj).toEqual("test");
    });
  });

describe("getId()")
    it("Returns the Id of the Employee", () => {
      const obj = Employee.getId();
  
      expect(obj).toEqual("121");
    });
  });

describe("getEmail()")
    it("Returns the email of the Employee", () => {
      const obj = Employee.getEmail();
  
      expect(obj).toEqual("test@test.com");
    });

describe("getRole()", () => {
      it("returns the string 'Employee'", () => {
          const obj = Employee.getRole();

          expect(obj).toEqual('Employee');
      });
});
