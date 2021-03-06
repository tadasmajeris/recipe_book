Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});  // only by the logged in author
  // return Recipes.find();  // all recipes
});

Meteor.publish('singleRecipe', function(id){
  check(id, String);
  return Recipes.find({_id: id});
});
