var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2; 
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) { 
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object)
  delete newRecipes.key
}
  



