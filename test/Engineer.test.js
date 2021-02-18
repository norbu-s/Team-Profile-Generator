const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should return an object with 4 properties", () => {
      const obj = new Engineer("test","100","testtest.com","github");
  
  describe("getName()")
      it("Returns the name of the Engineer", () => {
        const obj = Engineer.getName();
    
        expect(obj).toEqual("test");
      });
    });
    
  describe("getId()")
      it("Returns the Id of the Engineer", () => {
        const obj = Engineer.getId();
    
        expect(obj).toEqual("121");
      });
    });

  describe("getEmail()")
      it("Returns the email of the Engineer", () => {
        const obj = Engineer.getEmail();
    
        expect(obj).toEqual("test@test.com");
      });

  describe("getGithubUsername()")
      it("Returns the OfficeNumber of the Engineer", () => {
        const obj = Engineer.getGithubUsername();
    
        expect(obj).toEqual("1234567890");
      });

  describe("getRole()", () => {
        it("returns the string 'Engineer'", () => {
            const obj = Engineer.getRole();

            expect(obj).toEqual('Engineer');
        });
  });
  