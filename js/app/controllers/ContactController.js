function ContactController() {
  var vm = this;

  vm.name = 'Me';
  vm.email = 'me@email.com';
  vm.phone = '333-9999';

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
