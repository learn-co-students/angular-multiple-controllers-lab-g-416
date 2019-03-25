function ContactController() {
  var vm = this;
  vm.name = "Efrain";
  vm.email = "test@email.com";
  vm.phone = "888-888-8888";

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular.module("app").controller("ContactController", ContactController);