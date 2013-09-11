var assert = require("assert");
var Registration = require("../source/register.js");

describe("User Registration", function(){
  describe("Initialization", function(){
    it("should exist when the registration object is created",function(){
      var user_register = new Registration();
      assert.ok(user_register, "the object exists when created");
    });

    it("should make sure the inputs are valid", function(){
    	var user = new Registration({
    		"user":"vaponte", 
    		"email":"victor",
    		"password":"123redtree",
    		"confirm":"123red"
    	})
    });
  });
});