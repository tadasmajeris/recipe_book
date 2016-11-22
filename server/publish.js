Meteor.publish('recipes', function(){
  // return Recipes.find({author: this.userId});  // only by the logged in author
  return Recipes.find();  // all recipes
});

Meteor.publish('allUsers', function(){
  return Meteor.users.find({});
});
