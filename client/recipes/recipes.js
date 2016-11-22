Meteor.subscribe('recipes');

Template.RecipesList.helpers({
  recipes(){
    return Recipes.find();
  },

  findAuthor(userId){
    const user = Meteor.users.findOne(userId);
    const username = user.emails[0].address || user.profile.name;
    return username
  }
});
