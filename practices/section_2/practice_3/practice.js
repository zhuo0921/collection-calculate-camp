function count_same_elements(collection) {
  //在这里写入代码
  let res = {};
  collection.map( item => {
    let count = 1;
    let char = item;
    let parsedItem = item;
    if(parsedItem.indexOf(":") > 0){
      parsedItem = parsedItem.replace(":", "-");
    }
    if(parsedItem.indexOf("[") > 0){
      parsedItem = parsedItem.replace("[", "-").substring(0, parsedItem.length - 1);
    }
    if(parsedItem.indexOf("-") > 0){
      char = parsedItem.split("-")[0];
      count = parseInt(parsedItem.split("-")[1]);
    }
    if(char in res){
      res[char] += count;
    }
    else{
      res[char] = count;
    }
  })

  var result = [];
  for(var item in res){
    result.push({"name":item, "summary":res[item]});
  }
  return result;

}

module.exports = count_same_elements;
