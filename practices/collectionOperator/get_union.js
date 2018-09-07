'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var newArray = collection_a.concat(collection_b);
  var set = Array.from(new Set(newArray));
  return set;
}

module.exports = get_union;

