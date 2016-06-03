var RecordStore = require ('../recordstore')
var Record = require ('../record')

var assert = require('chai').assert;

describe('a record store', function(){

  var rollingRecords = new RecordStore( 'Rolling Records', 'Aberdeen' )
  var arcticMonkeys = new Record( 'Arctic Monkeys', 'AM', 11 )
  var theStrokes = new Record( 'The Strokes', 'This is it', 12 )


  var oasis = new Record( 'Oasis', 'Definitely Maybe', 10 )


   it('should have a name', function () {
    assert.equal( 'Rolling Records' , rollingRecords.name);
   })

   it('should have a city', function () {
    assert.equal( 'Aberdeen' , rollingRecords.city);
   })

   it('should add a record to the inventory', function(){
    rollingRecords.add([oasis, arcticMonkeys, theStrokes])
    assert.equal(3, rollingRecords.inventory.length)
   })

   it('should be able to find a record', function(){
    rollingRecords.find(oasis)
    assert.equal("Oasis", oasis.artist)
   })

});

