var RecordStore = function( name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [ ];
  this.balance = 1000

}

RecordStore.prototype = {
  add: function(record){
    for (var rec in record)
    this.inventory.push(record[rec]);
  }
};

module.exports = RecordStore;