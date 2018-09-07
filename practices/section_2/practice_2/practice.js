function count_same_elements(collection) {
  //在这里写入代码
  let res = {};
  collection.map( item => {
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

  // refactor

  let result = [];
  for(let item in res){
    result.push({"key":item, "count":res[item]});
  }
  return result;

}

module.exports = count_same_elements;
