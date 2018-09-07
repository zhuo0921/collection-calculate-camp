'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var a = new Set(collection_a);
  var b = new Set(collection_b);

  return eqSet(a, b);

  function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
  }
}

module.exports = compare_collections;


