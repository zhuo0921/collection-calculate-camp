function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  for(var i of collection_a)
  {
    if(object_b.value.indexOf(i.key)>=0)
    {
      i.count -=1;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
