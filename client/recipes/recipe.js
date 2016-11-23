Template.Recipe.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
  updateRecipeId(){
    return this._id;
  },
  editMode(){
    return Template.instance().editMode.get();
  }
});

Template.Recipe.events({
  'click .toggle-menu'(){
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash'(){
    const thisId = this._id;
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this recipe!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it",
      closeOnConfirm: true
    },
    function(){
      Meteor.call('deleteRecipe', thisId);
    });
  },
  'click .fa-pencil'(event, template){
    template.editMode.set(!template.editMode.get());
  }
});
