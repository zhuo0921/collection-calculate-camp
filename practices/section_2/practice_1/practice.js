function count_same_elements(collection) {
  //在这里写入代码
  let counts = {};
  collection.forEach(function(item) {
    counts[item] = (counts[item] || 0) + 1;
  });

  let result = [];
  for(let item in counts){
    result.push({"key":item, "count":counts[item]});
  }
  return result;
}

module.exports = count_same_elements;
