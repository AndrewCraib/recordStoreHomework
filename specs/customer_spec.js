var Customer = require ('../customer')
var assert = require('chai').assert;

describe('a customer', function(){

  var Andrew = new Customer ( 'Andrew' )


   it('should have a name', function () {
    assert.equal( 'Andrew' , Andrew.custName);
   })
 });