const Intern = require("../lib/Intern");


test("Should return an object with 4 properties", () => {
  const e =new intern("Ed","10","testtest.com","Intern School");
  expect(typeof(e)).toBe("object");
});

test("Returns the name of the Intern", () => {
  const e = Intern.getName();
        expect(e.getName()).toEqual("Ed");
      });

test("Returns the Id of the Intern", () => {
  const e = Intern.getId();
        expect(e.getId()).toEqual("12");
      });

test("Returns the email of the Intern", () => {
  const e = Intern.getEmail();
        expect(e.getEmail).toEqual("test@test.com");
      });

test("Returns the School of the Intern", () => {
  const e = Intern.getSchool();
        expect(e.getSchool()).toEqual("Intern School");
      }); 

test("Returns the role of the Intern", () => {
  const e = Intern.getRole();
        expect(e.getRole()).toEqual("Intern");
      }); 
