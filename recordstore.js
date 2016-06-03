var _ = require('lodash')

var RecordStore = function( name, city ) {
  this.name = name;
  this.city = city;
  this.inventory = [ ];
  this.balance = 1000

}

RecordStore.prototype = {
  add: function(record){
    for (var rec in record)
    this.inventory.push(record[rec]);
  },

  displayAll: function(inventory){
     for(var r = 0; r < arguments.length; r++) {
       return this.inventory[r];
     }
  },

  find: function(request){
   return _.find( this.inventory, function(o){
    return o.title === request
    })
  }
};

module.exports = RecordStore;







// addRecords: function(){

//    for(var i = 0; i < arguments.length; i++) {
//      this.inventory.push( arguments[i] )
//    }
//  },