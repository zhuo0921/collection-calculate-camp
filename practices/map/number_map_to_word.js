'use strict';
var number_map_to_word = function(collection){
  return collection.map(a=>String.fromCharCode(a+96));
};

module.exports = number_map_to_word;
