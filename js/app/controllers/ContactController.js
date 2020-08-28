function ContactController() {
  var vm = this;
  vm.name = 'bob';
  vm.email = 'bobmail';
  vm.phone = '321'
  vm.changeName = () => vm.name = 'harold';
}

angular
    .module('app')
    .controller('ContactController', ContactController);