Template.RecipesList.helpers({
  recipes(){
    return Recipes.find();
  }
});

Template.RecipesList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  })
});
