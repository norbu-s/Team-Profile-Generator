const Manager = require("../lib/Manager");

// test for Manager

describe("Manager", () => {
  it("Should return an object with 4 properties", () => {
    const obj = new Manager("test","100","testtest.com","1234567890");

describe("getName()")
    it("Returns the name of the manager", () => {
      const obj = manager.getName();
  
      expect(obj).toEqual("test");
    });
  });

describe("getId()")
    it("Returns the Id of the manager", () => {
      const obj = manager.getId();
  
      expect(obj).toEqual("121");
    });
  });

describe("getEmail()")
    it("Returns the email of the manager", () => {
      const obj = manager.getEmail();
  
      expect(obj).toEqual("test@test.com");
    });

describe("getOfficeNumber()")
    it("Returns the OfficeNumber of the manager", () => {
      const obj = manager.getOfficeNumber();
  
      expect(obj).toEqual("1234567890");
    });
    
describe("getRole()", () => {
      it("returns the string 'Manager'", () => {
          const obj = manager.getRole();

          expect(obj).toEqual('Manager');
      });
});
