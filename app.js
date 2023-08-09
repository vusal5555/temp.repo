const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newArr = _.flattenDeep(items);

console.log(newArr);
