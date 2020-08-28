function StaffController() {
  var vm = this;
  vm.name = 'nGelica';
  vm.email = 'email';
  vm.phone = '123'
}

angular
    .module('app')
    .controller('StaffController', StaffController);