var recipes = { prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, {recipes}, {prop: 2}); 
  return recipes;
}



