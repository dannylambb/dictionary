const { sculptureList } = require('./data.js');

// array
const sculptureListLengths = [];

sculptureList.forEach((sculpture) => {
  const lengthObject = {};

  // loop
  for (let key in sculpture) {
    lengthObject[key] = sculpture[key].length; 
  }

  sculptureListLengths.push(lengthObject);
});

console.log(sculptureListLengths);
