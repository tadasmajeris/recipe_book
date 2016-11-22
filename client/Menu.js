Template.Menu.helpers({
  recipes(){
    return Recipes.find({inMenu: true});
  }
});

Template.Menu.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  })
});
