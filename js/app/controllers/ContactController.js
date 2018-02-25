function ContactController() {
  var vm = this;

  vm.name = "Isabel";
  vm.email = "isabel@me.com";
  vm.phone = "1234567890";

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);
