function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let a = new Set(collection_a);
  let b = new Set(collection_b);
  let intersectionSet = new Set([...a].filter(x => b.has(x)));
  return Array.from(intersectionSet);
}

module.exports = collect_same_elements;
