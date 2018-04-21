function ContactController() {
  var vm = this;
  vm.name = "John Aldwood";
  vm.email = "jaldy@gmail.com";
  vm.phone = "63183770";

  vm.changeName = function() {
    vm.name = "John Butcher Aldwood";
  }
}

angular
    .module("app")
    .controller("ContactController", ContactController);
