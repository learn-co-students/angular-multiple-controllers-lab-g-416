function ContactController() {
  this.name = "John Aldwood";
  this.email = "jaldy@gmail.com";
  this.phone = "63183770";
  var vm = this;

  this.changeName = function() {
    vm.name = "John Butcher Aldwood";
  }
}

angular
    .module("app")
    .controller("ContactController", ContactController);
