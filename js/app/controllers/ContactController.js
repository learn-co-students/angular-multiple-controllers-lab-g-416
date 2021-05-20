function ContactController() {
  var vm = this;
  vm.name = 'Steve'
  vm.email = 'Steve@apple.com'
  vm.phone = '111555999'

  vm.changeName = function () {
    vm.name = 'Something Else'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);
