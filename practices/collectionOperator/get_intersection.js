'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码

  let a = new Set(collection_a);
  let b = new Set(collection_b);
  let intersectionSet = new Set([...b].filter(x => a.has(x)));
  return Array.from(intersectionSet);
}

module.exports = get_intersection;
