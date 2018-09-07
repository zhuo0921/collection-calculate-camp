'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let a = new Set(collection_a);
  let b = new Set(collection_b);
  let differenceABSet = new Set([...a].filter(x => !b.has(x)));
  return Array.from(differenceABSet);
}

module.exports = choose_no_common_elements;
