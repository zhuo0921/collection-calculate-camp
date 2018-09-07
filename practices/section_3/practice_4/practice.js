function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let res = {};
  collection_a.map( item => {
    let count = 1;
    let char = item;
    if(item.indexOf("-") > 0){
      char = item.split("-")[0];
      count = parseInt(item.split("-")[1]);
    }
    if(char in res){
      res[char] += count;
    }
    else{
      res[char] = count;
    }
  })

  let result = [];
  for(let item in res){
    result.push({"key":item, "count":res[item]});
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
