const Intern = require("../lib/Intern");


describe("Intern", () => {
    it("Should return an object with 4 properties", () => {
      const obj = new Intern("test","100","testtest.com","Mt.Hermon");
  
  describe("getName()")
      it("Returns the name of the Intern", () => {
        const obj = Intern.getName();
    
        expect(obj).toEqual("test");
      });
    });

  describe("getId()")
      it("Returns the Id of the Intern", () => {
        const obj = Intern.getId();
    
        expect(obj).toEqual("121");
      });
    });

  describe("getEmail()")
      it("Returns the email of the Intern", () => {
        const obj = Intern.getEmail();
    
        expect(obj).toEqual("test@test.com");
      });

  describe("getSchool()")
      it("Returns the OfficeNumber of the Intern", () => {
        const obj = Intern.getSchool();
    
        expect(obj).toEqual("Mt.Hermon");
      });

  describe("getRole()", () => {
        it("returns the string 'Intern'", () => {
            const obj = Intern.getRole();

            expect(obj).toEqual('Intern');
        });
  });
  