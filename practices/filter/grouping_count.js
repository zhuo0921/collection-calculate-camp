'use strict';

function grouping_count(collection) {

  let counts = {};
  collection.forEach(function(item) {
    counts[item] = (counts[item] || 0) + 1;
  });
  return counts;
}

module.exports = grouping_count;
