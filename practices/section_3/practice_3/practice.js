function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let counts = {};
  collection_a.forEach(function(item) {
    counts[item] = (counts[item] || 0) + 1;
  });

  let result = [];
  for(let item in counts){
    result.push({"key":item, "count":counts[item]});
  }

  for(var i of result)
  {
    if(object_b.value.indexOf(i.key)>=0)
    {
      i.count -= Math.floor(i.count/3);
    }
  }
  return result;
}

module.exports = create_updated_collection;
