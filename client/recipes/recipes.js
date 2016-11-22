Meteor.subscribe('recipes');
Meteor.subscribe('allUsers');

Template.RecipesList.helpers({
  recipes(){
    return Recipes.find();
  },

  findAuthor(userId){
    const user = Meteor.users.findOne(userId);
    if (user.hasOwnProperty('emails')) {
      return user.emails[0].address;
    } else if (user.hasOwnProperty('profile')) {
      return user.profile.name
    }
    return user.username;
  }
});
