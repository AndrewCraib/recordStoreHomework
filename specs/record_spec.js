var Record = require ('../record')
var assert = require('chai').assert;

describe('a record', function(){

var oasis = new Record( 'Oasis', 'Definitely Maybe', 10 )
var arcticMonkeys = new Record( 'Arctic Monkeys', 'AM', 11 )
var theStrokes = new Record( 'The Strokes', 'This is it', 12 )


 it('should have an artist name', function () {
  assert.equal( 'Oasis' , oasis.artist);
 })

 it('should have an album name', function () {
  assert.equal( 'Definitely Maybe' , oasis.title);
 })

 it('should have a price', function () {
  assert.equal( 10 , oasis.price);
 })

 it('should be able to add a record', function(){
  assert.equal()
 })

});