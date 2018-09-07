function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let array = object_b.value;
  let a = new Set(collection_a);
  let b = new Set(array);
  let intersectionSet = new Set([...a].filter(x => b.has(x)));
  return Array.from(intersectionSet);
}

module.exports = collect_same_elements;
