'use strict';
var even_asc_odd_desc = function(collection){

return collection.filter(a=>a%2==0).sort((a,b)=>a-b).concat(collection.filter(a=>a%2==1).sort((a,b)=>b-a));
};
module.exports = even_asc_odd_desc;
