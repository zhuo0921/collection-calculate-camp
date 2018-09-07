'use strict';

let compute_median = require('../../practices/reduce/compute_median.js');

ddescribe('compute_median', function () {
  let collection_a = [1, 1, 1, 2, 3];
  let collection_b = [1, 1, 2, 3];
  let collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];

  it('计算给定奇数个数字的集合的中位数', function () {

    let result = compute_median(collection_a);
    expect(result).toEqual(1);
  });

  it('计算给定偶数个数字的集合的中位数', function () {

    let result = compute_median(collection_b);
    expect(result).toEqual(1.5);
  });

  it('计算给定偶数个数字的集合的中位数-2', function () {
    let result = compute_median(collection_c);
    expect(result).toEqual(8.5);
  })
});
