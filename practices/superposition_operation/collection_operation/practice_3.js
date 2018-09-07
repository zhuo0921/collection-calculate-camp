'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(a=>a%2==1).map(a=>a*3+5).reduce((a,b)=>a+b);
}

module.exports = hybrid_operation_to_uneven;

