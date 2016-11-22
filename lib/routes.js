Accounts.onLogin(function(){
  FlowRouter.go('recipes')
});

Accounts.onLogout(function(){
  FlowRouter.go('home')
});

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()){
      FlowRouter.go('recipes')
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipes', {
  name: 'recipes',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});
