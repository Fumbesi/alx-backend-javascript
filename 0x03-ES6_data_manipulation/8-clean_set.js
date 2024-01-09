// 8-clean_set.js

function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.map((value) => value.substring(startString.length)).join('-');
}

module.exports = cleanSet;
