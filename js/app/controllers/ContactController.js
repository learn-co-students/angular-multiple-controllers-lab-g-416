function ContactController() {
  var vm = this;

  vm.name = "Bill Gates";
  vm.email = "bill@microsoft.com";
  vm.phone = "8675309";

  vm.changeName = function() {
    vm.name = "Brian Smith";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
