'use strict';

function compute_median(collection) {
  //在这里写入代码
  let sorted = collection.sort((a, b) => a - b);
  if(sorted.length % 2 == 0){
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  }
  else{
    return sorted[Math.floor(sorted.length / 2)];
  }
}

module.exports = compute_median;


