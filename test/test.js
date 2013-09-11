var assert = require("assert");
var Register = require("../source/register.js");

describe("User Registration", function(){
  describe("Initialization", function(){
    it("should exist when the registration object is created",function(){
      var user_register = new Register();
      assert.ok(user_register, "the object exists when created");
    });
  });
});