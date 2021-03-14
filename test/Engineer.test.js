const Engineer = require("../lib/Engineer");


test("Should return an object with 4 properties", () => {
  const e =new Engineer("test","11","test@test.com","github");
  expect(e.github).toBe("object");
});

test("Returns the name of the Engineer", () => {
  const e = Engineer.getName();
        expect(e.getName()).toEqual("Ed");
      });

test("Returns the Id of the Engineer", () => {
  const e = Engineer.getId();
        expect(e.getId()).toEqual("12");
      });

test("Returns the email of the Engineer", () => {
  const e = Engineer.getEmail();
        expect(e.getEmail()).toEqual("test@test.com");
      });

test("Returns the OfficeNumber of the Engineer", () => {
  const e = Engineer.getGithubUsername();
        expect(e.getGithubUsername()).toEqual("test@github.com");
      }); 

test("Returns the role of the Engineer", () => {
  const e = Engineer.getRole();
        expect(e.getRole).toEqual("Engineer");
      }); 
