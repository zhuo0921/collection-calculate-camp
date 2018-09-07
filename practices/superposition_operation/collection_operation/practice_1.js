'use strict';

function hybrid_operation(collection) {

  return collection.map(a=>a*3+2).reduce((a,b)=>a+b);
  //在这里写入代码
}

module.exports = hybrid_operation;

