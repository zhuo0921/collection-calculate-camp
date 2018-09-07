'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let arr = collection.filter(a=>a%2==1);
  let sum = collection.filter(a=>a%2==1).reduce((a,b)=>a+b);
  return sum/arr.length;
}

module.exports = average_uneven;
